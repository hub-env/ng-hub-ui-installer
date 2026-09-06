# Breaking Changes — ng-hub-ui (installer)

This package versions on its own line rather than tracking an Angular major, but it still cannot
say "breaking" in a number the CLI reads before it runs. This file is where a break is announced.

## [0.2.0] - 2026-09-06
### The Angular floor is `>=18.0.0`, up from `>=17.3.0`

- **Change**: `peerDependencies` now asks for `@angular/common` and `@angular/core` at `>=18.0.0`.
- **Impact**: `ng add ng-hub-ui` no longer installs on an Angular 17 workspace. It used to, and
  that was the problem: every one of the 25 catalogued libraries already required Angular 18 or
  later, so the install ran, wrote the manifest and then failed to resolve — a break disguised as
  a success. The new floor turns that into a refusal the CLI can explain up front.
- **Migration**: upgrade the workspace to Angular 18 or later before running `ng add ng-hub-ui`.
  There is no version of the catalogue that works on 17, so there is nothing to pin back to.
