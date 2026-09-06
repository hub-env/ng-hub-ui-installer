# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-09-06

### Added

- **The schematic has a spec again, and this time the repository keeps it.** The only test over
  `ng add` lived as an untracked `index.spec.js` beside the compiled output, where
  `.gitignore` excludes it — so it left the repository the moment it was written and rotted
  where nobody could see it. Run today it reported 0 passing and 3 failing, and had been red
  for months: its fake context was a bare `{}`, so the rule threw on `context.logger.info`
  before reaching assertions that were themselves frozen at the Angular-21 catalogue. What
  replaces it is a tracked `schematics/ng-add/index.spec.ts`, compiled by `tsconfig.spec.json`
  — the publish build's config with the spec exclusion lifted — and run by `npm test` inside
  the project (`npm test --prefix projects/installer` from the workspace root). The published
  JavaScript is untouched: the publish build still excludes specs, and the `files` whitelist
  would drop one anyway. Its expectations read `LIBRARY_PACKAGES` rather than repeating the
  versions, because repeating them is precisely what made the old spec worthless — red on
  every routine catalogue refresh and silent about the schematic. It covers both selection
  forms (array and comma-separated flag), the transitive and external co-installs, the version
  a consumer already pinned and the schematic must not rewrite, the queued install task and
  the two rejections; and over the catalogue itself, that no entry names an uncatalogued
  dependency, that every range is a caret over a complete version, and that no two identifiers
  claim the same package.

### Fixed

- **A catalogue floor sat below what the catalogue's own packages demand of it.**
  `ng-hub-ui-forms` reached 22.32.0 peering on `ng-hub-ui-utils >=22.12.0`, while the
  catalogue still offered `utils ^22.8.1`, so `ng add ng-hub-ui --libraries=forms` wrote a
  pair npm cannot satisfy. A fresh unpinned install hid it by resolving upward; anywhere
  resolution was fixed — an existing lockfile, a stale cache, a manifest already carrying the
  old floor — it failed with `ERESOLVE`. This is the second time the same drift has bitten
  (0.1.4 closed the previous round), so rather than patch the one range, all 25 now name the
  version published today: `avatar ^22.9.3`, `badges ^22.6.2`, `board ^22.5.1`,
  `action-sheet ^22.0.1`, `breadcrumbs ^22.5.2`, `buttons ^22.11.0`, `calendar ^22.6.3`,
  `ds ^22.9.0`, `forms ^22.32.0`, `history ^22.0.3`, `icons ^22.1.2`, `loading ^22.1.0`,
  `metrics ^22.2.4`, `milestones ^22.3.2`, `modal ^22.10.0`, `nav ^22.11.2`,
  `paginable ^22.17.0`, `panels ^22.10.3`, `portal ^22.0.5`, `signature ^22.6.1`,
  `skeleton ^22.2.4`, `sortable ^22.1.3`, `stepper ^22.8.1`, `toast ^22.7.2` and
  `utils ^22.12.0`. Every floor is now at or above the highest peer the family declares on
  it, and the catalogue's header comment states that invariant so the next refresh does not
  have to rediscover it. Consumers are unaffected on upgrade: the schematic writes a
  dependency only when the key is absent, so a version already pinned in `package.json` is
  never rewritten.
- **Both READMEs denied a library the installer has offered since 0.1.6.** They stated that
  `ng-hub-ui-action-sheet` "is not yet published to npm, so the installer does not offer it", while
  the catalogue has carried it since 0.1.6 and the registry has served it since 22.0.0. The denial
  stood twice in each language, and the entry was absent from three more places besides: the family
  list, the prompt transcript — where the real `x-prompt` puts Action Sheet first — and the
  installable-libraries table. Five statements to the same effect leave a reader no way to discover
  from the page that `ng add ng-hub-ui --libraries=action-sheet` has worked all along.
- **Two neighbouring claims were false in the same way, from nobody re-reading the page against the
  schematic.** The non-interactive section told readers to take the identifiers "from the prompt",
  which renders labels only — they are in the installable-libraries table, and that is where the
  section now sends them. And the 0.1.7 entry below claimed the `homepage` had been pointed at this
  library's own documentation page: the installer has no page on the site, and what shipped was the
  move from `https://hubui.dev/` to the localized root it redirects to. The entry now says that. The
  two documentation links, both the same site root, are likewise named for what they reach.
- **Four library documentation pages told readers to run `ng add ng-hub-ui-installer`.** No such
  package exists on npm; the installer is published as `ng-hub-ui`. The line appeared where the
  avatar, metrics, milestones and toast pages explain the `ng-hub-ui-utils` peer — the one moment the
  command has to work — and a regression spec now reads all four pages so the wrong name cannot come
  back.
- A `FUNCTIONALITIES.md` states the schematic's real surface, as the sibling libraries do: what the
  prompt and the flags accept, how a selection is validated, how co-installs are resolved, and what
  the schematic will not touch.

### Changed

- **The Angular peer range is `>=18.0.0`, up from `>=17.3.0`.** That range is the only
  compatibility statement the package makes, and it was promising support no selection could
  honour: nothing in the catalogue targets Angular 17. Ten entries floor at 18.0.0,
  `calendar` at 19.0.0, twelve at 21.0.0 and `stepper` at 21.1.2, while `ds` declares no
  Angular peer at all because it ships tokens rather than code. On a 17.3 workspace the
  CLI therefore agreed to run `ng add`, the schematic wrote the dependencies, and the failure
  only surfaced when the package manager tried to resolve what had just been written. Raising the
  floor turns that into a refusal the CLI can explain, and it shuts the door on Angular 17: see
  `BREAKING_CHANGES.md`.
  Declaring the real floor moves that into a refusal the consumer can read before anything is
  written; each library's own peer keeps enforcing whatever it needs above 18.

## [0.1.7] - 2026-09-01

### Changed

- **The `homepage` in the manifest points at the localized site root**, `https://hubui.dev/en/`,
  instead of `https://hubui.dev/`, which only redirects there. It is the link a registry shows beside
  the package, and a redirect is one hop a reader arriving from npm does not need. This package has no
  page of its own on the documentation site, so the family root is the closest the link can get — the
  per-library references it installs are one click further in. Metadata only — no code, no types, no
  styles change, and nothing a consumer imports is affected.

## [0.1.6] - 2026-08-30

### Added

- **`action-sheet` joins the catalogue and the prompt.** `ng-hub-ui-action-sheet` reaches the
  registry with `22.0.0` — its first real release, after a scaffold that was never published —
  so `ng add ng-hub-ui` can now offer and install it. The catalogue targets `^22.0.0`; the entry
  needs no co-installs, since the library depends on nothing beyond Angular.

## [0.1.5] - 2026-08-29

### Changed

- **The `breadcrumbs` floor moves to `^22.5.0`.** The previous `^22.4.0` already resolved to the
  new release, so nothing was broken; what the floor now states is where the features live.
  22.5.0 is the version that collapses long trails (`maxItems`), lets a crumb point outside the
  router (`href` / `target` / `rel` / `download`, and the `items` input) and draws the
  design-system focus ring — so an install pinned by this catalogue lands on a version where the
  documentation matches the package.

## [0.1.4] - 2026-08-24

### Added

- **`loading` and `signature` join the catalogue and the prompt.** `ng-hub-ui-signature` has
  been on npm since 22.0.0 (2026-08-14) but the installer never offered it, so anyone wanting
  the signature field had to find the package and install it by hand; `ng-hub-ui-loading`
  22.0.0 is new to the family (spinners, overlays and a fullscreen loading service). The
  catalogue targets `^22.1.1` and `^22.0.0` respectively.
- Co-installs for the two new entries: `loading` pulls in `ng-hub-ui-utils`, and `signature`
  pulls in `ng-hub-ui-forms` — the form-field shell whose contract the signature field
  inherits — plus `ng-hub-ui-utils`.

### Fixed

- **The `ng-hub-ui-utils` floor was below what five libraries require.** The catalogue offered
  `^22.7.0`, which resolves as `>=22.7.0 <23.0.0`, while `nav` peers on `>=22.8.1` and
  `paginable`, `stepper`, `signature` and `loading` peer on `>=22.8.0`. A fresh install usually
  landed on a recent version and hid the mismatch, so it only bit where resolution was pinned —
  an existing lockfile, a stale cache, or a manifest already carrying `^22.7.0` — and then
  failed with `ERESOLVE`. The floor is now `^22.8.1`, the lowest value that satisfies every
  catalogued peer. Consumers are unaffected: the schematic writes a dependency only when the
  key is absent, so an entry already in `package.json` is never rewritten.

## [0.1.3] - 2026-08-17

### Fixed

- **The published package declared no licence.** An absent `license` field is not neutral — a registry reports it as unlicensed, which legally reads as all rights reserved, the most restrictive state possible rather than the most open. The intent was always MIT; it is now stated in `package.json` and carried in a `LICENSE` file that ships with the package.

## [0.1.2] - 2026-07-28

### Changed

- **`ng-hub-ui-utils` is now co-installed for `avatar`, `forms`, `metrics`, `milestones`,
  `panels` and `toast`.** These libraries dropped their private copies of `resolveHubAccent`
  and now import the canonical helper from `ng-hub-ui-utils` (declared as a new peer
  `>=22.7.0`), so the installer adds it automatically. `panels` keeps `ng-hub-ui-ds` and
  gains `ng-hub-ui-utils` on top.
- Catalogue version ranges refreshed to the accompanying releases: `avatar ^22.9.0`,
  `forms ^22.10.0`, `metrics ^22.2.0`, `milestones ^22.3.0`, `panels ^22.10.0`,
  `toast ^22.6.0`.

## [0.1.1] - 2026-07-28

### Added

- `history` returns to the catalogue and the prompt: `ng-hub-ui-history` 22.0.0 is now
  published on npm (it had been withdrawn in 0.1.0 because offering it made
  `npm install` fail with a 404).

## [0.1.0] - 2026-07-26

### Changed

- **Package catalogue rewritten against the current library family.** Every entry now
  targets the published `22.x` line (the previous catalogue pinned Angular-21-era and
  `0.x` versions — e.g. `utils ^1.2.1` vs the real `22.7.0` — so `ng add ng-hub-ui`
  installed an incompatible stack into Angular 22 workspaces).
- Libraries whose runtime requires another ng-hub-ui package now declare it, so `ng add`
  co-installs it: `utils` for badges, board, buttons, calendar, modal, nav, paginable,
  portal and stepper; `ds` for panels.

### Added

- Catalogue entries for the nine libraries missing from the installer: `badges`,
  `buttons`, `ds`, `forms`, `icons`, `metrics`, `milestones`, `panels`, `toast`.

### Removed

- `accordion` (superseded by `ng-hub-ui-panels`; the npm package is deprecated),
  `dropdown` (never existed as a standalone package — the dropdown lives in
  `ng-hub-ui-buttons`), `action-sheet` (pre-release scaffold, not yet a real
  library) and `history` (`ng-hub-ui-history` has never been published to npm —
  offering it made `npm install` fail with a 404; it returns once published).

### Fixed

- `repository.url` pointed at a non-existent GitHub org handle (`carlosmorcillo`); it now
  points to `carlos-morcillo/ng-hub-ui`, so the npm "Repository" link resolves.
