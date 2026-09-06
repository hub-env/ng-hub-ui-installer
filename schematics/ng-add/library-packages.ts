import type { PackageMetadata } from './models';

/**
 * Central package catalogue used by prompts, validation, and dependency resolution.
 *
 * Keep every entry aligned with the latest published version of each library
 * (`projects/<lib>/package.json` in the monorepo). Libraries whose runtime peer
 * depends on another ng-hub-ui package declare it in `dependencies` so `ng add`
 * co-installs it.
 *
 * A stale range is not merely out of date: a floor below the highest peer any
 * other catalogued library declares on that package writes a manifest npm then
 * refuses to resolve, so refreshing all of them together is what keeps the
 * catalogue installable.
 */
export const LIBRARY_PACKAGES: Record<string, PackageMetadata> = {
	avatar: {
		packageName: 'ng-hub-ui-avatar',
		version: '^22.9.3',
		dependencies: ['utils']
	},
	badges: {
		packageName: 'ng-hub-ui-badges',
		version: '^22.6.2',
		dependencies: ['utils']
	},
	board: {
		packageName: 'ng-hub-ui-board',
		version: '^22.5.1',
		dependencies: ['utils']
	},
	'action-sheet': { packageName: 'ng-hub-ui-action-sheet', version: '^22.0.1' },
	breadcrumbs: { packageName: 'ng-hub-ui-breadcrumbs', version: '^22.5.2' },
	buttons: {
		packageName: 'ng-hub-ui-buttons',
		version: '^22.11.0',
		dependencies: ['utils']
	},
	calendar: {
		packageName: 'ng-hub-ui-calendar',
		version: '^22.6.3',
		dependencies: ['utils']
	},
	ds: { packageName: 'ng-hub-ui-ds', version: '^22.9.0' },
	forms: {
		packageName: 'ng-hub-ui-forms',
		version: '^22.32.0',
		dependencies: ['utils']
	},
	history: { packageName: 'ng-hub-ui-history', version: '^22.0.3' },
	icons: { packageName: 'ng-hub-ui-icons', version: '^22.1.2' },
	loading: {
		packageName: 'ng-hub-ui-loading',
		version: '^22.1.0',
		dependencies: ['utils']
	},
	metrics: {
		packageName: 'ng-hub-ui-metrics',
		version: '^22.2.4',
		dependencies: ['utils']
	},
	milestones: {
		packageName: 'ng-hub-ui-milestones',
		version: '^22.3.2',
		dependencies: ['utils']
	},
	modal: {
		packageName: 'ng-hub-ui-modal',
		version: '^22.10.0',
		dependencies: ['utils']
	},
	nav: {
		packageName: 'ng-hub-ui-nav',
		version: '^22.11.2',
		dependencies: ['utils']
	},
	paginable: {
		packageName: 'ng-hub-ui-paginable',
		version: '^22.17.0',
		dependencies: ['utils']
	},
	panels: {
		packageName: 'ng-hub-ui-panels',
		version: '^22.10.3',
		dependencies: ['ds', 'utils']
	},
	portal: {
		packageName: 'ng-hub-ui-portal',
		version: '^22.0.5',
		dependencies: ['utils']
	},
	signature: {
		packageName: 'ng-hub-ui-signature',
		version: '^22.6.1',
		dependencies: ['forms', 'utils']
	},
	skeleton: { packageName: 'ng-hub-ui-skeleton', version: '^22.2.4' },
	sortable: {
		packageName: 'ng-hub-ui-sortable',
		version: '^22.1.3',
		externalDependencies: [{ packageName: 'sortablejs', version: '^1.15.7' }]
	},
	stepper: {
		packageName: 'ng-hub-ui-stepper',
		version: '^22.8.1',
		dependencies: ['utils']
	},
	toast: {
		packageName: 'ng-hub-ui-toast',
		version: '^22.7.2',
		dependencies: ['utils']
	},
	utils: { packageName: 'ng-hub-ui-utils', version: '^22.12.0' }
};
