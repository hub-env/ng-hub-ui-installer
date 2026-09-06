import { Tree, type SchematicContext } from '@angular-devkit/schematics';
import { strict as assert } from 'node:assert';
import { describe, it } from 'node:test';
import { ngAdd } from './index';
import { LIBRARY_PACKAGES } from './library-packages';
import type { NgAddSchema, PackageJson } from './models';

/**
 * Everything the rule does beyond the manifest, captured so the spec can assert on it.
 */
interface SchematicRun {
	/** Manifest as the rule left it in the tree. */
	manifest: PackageJson;

	/** Tasks scheduled through the context, one per queued package install. */
	tasks: unknown[];

	/** Messages the rule sent to the context logger. */
	logs: string[];
}

/**
 * Runs the installer rule over an in-memory workspace manifest.
 *
 * The context double carries a logger and a task sink because the rule reaches for both:
 * handing it a bare object throws before a single assertion is reached, which is how a
 * red suite can look like a catalogue problem it is not.
 *
 * @param options Installer options as Angular CLI would resolve them.
 * @param packageJson Manifest the consumer workspace starts from.
 * @returns The manifest the rule wrote plus the effects it asked of the context.
 */
function runNgAdd(options: NgAddSchema, packageJson: PackageJson = {}): SchematicRun {
	const tree = Tree.empty();
	tree.create('/package.json', JSON.stringify(packageJson, null, 2));

	const tasks: unknown[] = [];
	const logs: string[] = [];
	const context = {
		addTask: (task: unknown) => {
			tasks.push(task);

			return { id: tasks.length };
		},
		logger: {
			info: (message: string) => logs.push(message)
		}
	} as unknown as SchematicContext;

	ngAdd(options)(tree, context);

	return { manifest: JSON.parse(tree.readText('/package.json')) as PackageJson, tasks, logs };
}

/**
 * Manifest entry a catalogued library is expected to produce.
 *
 * Expectations read the catalogue rather than repeating its versions: a spec that froze them
 * would go red on every routine version refresh and say nothing about the schematic.
 *
 * @param library Catalogue identifier.
 * @returns Single-entry dependency record for that library.
 */
function entry(library: string): Record<string, string> {
	const metadata = LIBRARY_PACKAGES[library];

	return { [metadata.packageName]: metadata.version };
}

describe('ng-hub-ui ng-add schematic', () => {
	it('installs the selected libraries at their catalogued versions', () => {
		const { manifest } = runNgAdd({ libraries: ['skeleton', 'breadcrumbs'], skipInstall: true });

		assert.deepEqual(manifest.dependencies, { ...entry('skeleton'), ...entry('breadcrumbs') });
	});

	it('co-installs the ng-hub-ui packages a selection depends on', () => {
		const { manifest } = runNgAdd({ libraries: ['panels'], skipInstall: true });

		assert.deepEqual(manifest.dependencies, { ...entry('panels'), ...entry('ds'), ...entry('utils') });
	});

	it('co-installs the external packages a selection needs at runtime', () => {
		const { manifest } = runNgAdd({ libraries: ['sortable'], skipInstall: true });
		const externalDependencies = LIBRARY_PACKAGES['sortable'].externalDependencies ?? [];

		assert.ok(externalDependencies.length, 'sortable is the catalogue entry that carries an external dependency');

		for (const { packageName, version } of externalDependencies) {
			assert.equal(manifest.dependencies?.[packageName], version);
		}
	});

	it('leaves a version the consumer already pinned untouched', () => {
		const { manifest } = runNgAdd(
			{ libraries: ['board'], skipInstall: true },
			{ dependencies: { 'ng-hub-ui-board': '~22.0.0' } }
		);

		assert.deepEqual(manifest.dependencies, { 'ng-hub-ui-board': '~22.0.0', ...entry('utils') });
	});

	it('accepts the comma-separated selection the CLI flag produces', () => {
		const { manifest } = runNgAdd({ libraries: ' skeleton , breadcrumbs ,skeleton ', skipInstall: true });

		assert.deepEqual(manifest.dependencies, { ...entry('skeleton'), ...entry('breadcrumbs') });
	});

	it('queues the package install unless the caller opts out', () => {
		assert.equal(runNgAdd({ libraries: ['skeleton'] }).tasks.length, 1);
		assert.equal(runNgAdd({ libraries: ['skeleton'], skipInstall: true }).tasks.length, 0);
	});

	it('reports the selection it installed', () => {
		const { logs } = runNgAdd({ libraries: ['skeleton', 'breadcrumbs'], skipInstall: true });

		assert.deepEqual(logs, ['Installed ng-hub-ui libraries: skeleton, breadcrumbs']);
	});

	it('refuses an empty selection', () => {
		assert.throws(() => runNgAdd({ libraries: [], skipInstall: true }), /Select at least one ng-hub-ui library/);
	});

	it('refuses a library the catalogue does not carry', () => {
		assert.throws(() => runNgAdd({ libraries: ['datagrid'], skipInstall: true }), /Unknown ng-hub-ui library: datagrid/);
	});

	it('resolves every catalogued library in a single selection', () => {
		const libraries = Object.keys(LIBRARY_PACKAGES);
		const { manifest } = runNgAdd({ libraries, skipInstall: true });

		for (const library of libraries) {
			assert.equal(manifest.dependencies?.[LIBRARY_PACKAGES[library].packageName], LIBRARY_PACKAGES[library].version);
		}
	});
});

describe('ng-hub-ui library catalogue', () => {
	it('names only libraries the catalogue itself carries as dependencies', () => {
		for (const [library, metadata] of Object.entries(LIBRARY_PACKAGES)) {
			for (const dependency of metadata.dependencies ?? []) {
				assert.ok(Object.hasOwn(LIBRARY_PACKAGES, dependency), `${library} depends on uncatalogued ${dependency}`);
			}
		}
	});

	it('offers a caret range over a complete version for every package', () => {
		const caretRange = /^\^\d+\.\d+\.\d+$/;

		for (const [library, metadata] of Object.entries(LIBRARY_PACKAGES)) {
			assert.match(metadata.version, caretRange, `${library} offers ${metadata.version}`);

			for (const dependency of metadata.externalDependencies ?? []) {
				assert.match(dependency.version, caretRange, `${dependency.packageName} offers ${dependency.version}`);
			}
		}
	});

	it('maps every identifier to a distinct package', () => {
		const packageNames = Object.values(LIBRARY_PACKAGES).map((metadata) => metadata.packageName);

		assert.equal(new Set(packageNames).size, packageNames.length);
	});
});
