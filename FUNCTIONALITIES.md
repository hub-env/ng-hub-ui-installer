# Functionalities of the ng-hub-ui Installer

This table details the functionalities of the `ng-hub-ui` package and indicates which ones the README documents.

`ng-hub-ui` ships no components: it is the `ng-add` schematic that installs the rest of the family. There is nothing to render, so the documentation page at https://hubui.dev/en/installer/overview/ has an Overview and an Examples tab and no API or Styles tab at all — a schematic has no inputs, outputs, template slots or custom properties. The last column below says whether the behaviour is written down in [README.md](./README.md), not whether a demo exists.

## Invocation

| Category | Functionality | Documented |
| :--- | :--- | :---: |
| **Interactive** | `ng add ng-hub-ui` opens the multi-select prompt declared in `schema.json` | ✅ |
| | The prompt lists the 25 catalogued libraries by label, Action Sheet first | ✅ |
| **Non-interactive** | `--libraries=a,b,c` (comma-separated string) | ✅ |
| | `--libraries=a --libraries=b` (repeated flag) | ✅ |
| | `--skip-install` writes `package.json` and skips the package manager | ✅ |

---

## Selection handling

| Category | Functionality | Documented |
| :--- | :--- | :---: |
| **Normalization** | Accepts an array or a comma-separated string, trimming each entry | ✅ |
| | De-duplicates the selection, keeping the order it was given in | ✅ |
| **Validation** | Empty selection fails with `Select at least one ng-hub-ui library to install.` | ✅ |
| | Unknown identifier fails with `Unknown ng-hub-ui library: <id>.` | ✅ |

---

## Dependency resolution

| Category | Functionality | Documented |
| :--- | :--- | :---: |
| **Catalogue** | 25 identifiers mapped to their npm package and semver range | ✅ |
| | Every range floors at or above the highest peer the family declares on it | ❌ |
| **Co-installs** | ng-hub-ui peers pulled in automatically (`utils`, `ds`, `forms`) | ✅ |
| | Resolution is transitive: a co-installed library contributes its own peers | ❌ |
| | External peers pulled in as well (`sortablejs` for `sortable`) | ✅ |

---

## Manifest changes

| Category | Functionality | Documented |
| :--- | :--- | :---: |
| **Write** | Resolved packages added to `dependencies` in the workspace root `package.json` | ✅ |
| | A key already present is never overwritten, so a pinned version survives | ✅ |
| | The manifest is rewritten as two-space JSON with a trailing newline | ❌ |
| **Failure** | No `package.json` at the workspace root fails with a named error | ❌ |

---

## Scope

| Category | Functionality | Documented |
| :--- | :--- | :---: |
| **Install** | Schedules `NodePackageInstallTask` unless `--skip-install` was passed | ✅ |
| | Logs the libraries that were installed | ✅ |
| **Out of scope** | Does not touch `angular.json`, providers, components or stylesheets | ✅ |

---

_Note: ✅ indicates the behaviour is described in the README. ❌ indicates it exists in the schematic but is not written down there._
