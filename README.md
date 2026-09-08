# ng-hub-ui

[Español](./README.es.md) | **English**

The official installer and entry point for the **ng-hub-ui** family of Angular component libraries. Run a single `ng add ng-hub-ui` command, pick the libraries you need, and let the schematic wire the dependencies into your project.

> This is the umbrella installer package. It does not ship UI components itself — it installs the individual `ng-hub-ui-*` libraries listed below into your application.

## Documentation and Live Examples

This package is part of [Hub UI](https://hubui.dev/en/), a collection of Angular component libraries for standalone apps.

- Hub UI: https://hubui.dev/en/
- Reference for each library the installer can add: `https://hubui.dev/en/<library>/overview/` — for example https://hubui.dev/en/modal/overview/

- The installer's own page: https://hubui.dev/en/installer/overview/ — the commands, the prompt and what a selection writes, with the full option and catalogue tables kept here.

## 🧩 Library Family `ng-hub-ui`

`ng-hub-ui` is the family installer. These are the libraries that make up the ecosystem:

- [**ng-hub-ui-action-sheet**](https://www.npmjs.com/package/ng-hub-ui-action-sheet)
- [**ng-hub-ui-avatar**](https://www.npmjs.com/package/ng-hub-ui-avatar)
- [**ng-hub-ui-badges**](https://www.npmjs.com/package/ng-hub-ui-badges)
- [**ng-hub-ui-board**](https://www.npmjs.com/package/ng-hub-ui-board)
- [**ng-hub-ui-breadcrumbs**](https://www.npmjs.com/package/ng-hub-ui-breadcrumbs)
- [**ng-hub-ui-buttons**](https://www.npmjs.com/package/ng-hub-ui-buttons)
- [**ng-hub-ui-calendar**](https://www.npmjs.com/package/ng-hub-ui-calendar)
- [**ng-hub-ui-ds**](https://www.npmjs.com/package/ng-hub-ui-ds)
- [**ng-hub-ui-forms**](https://www.npmjs.com/package/ng-hub-ui-forms)
- [**ng-hub-ui-history**](https://www.npmjs.com/package/ng-hub-ui-history)
- [**ng-hub-ui-icons**](https://www.npmjs.com/package/ng-hub-ui-icons)
- [**ng-hub-ui-loading**](https://www.npmjs.com/package/ng-hub-ui-loading)
- [**ng-hub-ui-metrics**](https://www.npmjs.com/package/ng-hub-ui-metrics)
- [**ng-hub-ui-milestones**](https://www.npmjs.com/package/ng-hub-ui-milestones)
- [**ng-hub-ui-modal**](https://www.npmjs.com/package/ng-hub-ui-modal)
- [**ng-hub-ui-nav**](https://www.npmjs.com/package/ng-hub-ui-nav)
- [**ng-hub-ui-paginable**](https://www.npmjs.com/package/ng-hub-ui-paginable)
- [**ng-hub-ui-panels**](https://www.npmjs.com/package/ng-hub-ui-panels)
- [**ng-hub-ui-portal**](https://www.npmjs.com/package/ng-hub-ui-portal)
- [**ng-hub-ui-signature**](https://www.npmjs.com/package/ng-hub-ui-signature)
- [**ng-hub-ui-skeleton**](https://www.npmjs.com/package/ng-hub-ui-skeleton)
- [**ng-hub-ui-sortable**](https://www.npmjs.com/package/ng-hub-ui-sortable)
- [**ng-hub-ui-stepper**](https://www.npmjs.com/package/ng-hub-ui-stepper)
- [**ng-hub-ui-toast**](https://www.npmjs.com/package/ng-hub-ui-toast)
- [**ng-hub-ui-utils**](https://www.npmjs.com/package/ng-hub-ui-utils)

> [`ng-hub-ui-accordion`](https://www.npmjs.com/package/ng-hub-ui-accordion) is **deprecated** — its accordion view lives on, improved, in [`ng-hub-ui-panels`](https://www.npmjs.com/package/ng-hub-ui-panels).

---

## 📋 Table of Contents

- [🚀 Installation](#-installation)
- [⚙️ Usage](#️-usage)
- [🛠️ What the schematic does](#️-what-the-schematic-does)
- [🎛️ Options](#️-options)
- [📦 Installable libraries](#-installable-libraries)
- [✋ Manual installation](#-manual-installation)
- [🤝 Contribution](#-contribution)
- [☕ Support](#-support)
- [📄 License](#-license)

---

## 🚀 Installation

The recommended way to add ng-hub-ui to your Angular project is the Angular CLI `ng add` command, which runs the installer schematic interactively:

```bash
ng add ng-hub-ui
```

The Angular CLI fetches the `ng-hub-ui` package and executes its `ng-add` schematic.

## ⚙️ Usage

### Interactive

Running the command with no arguments launches a multi-select prompt:

```bash
ng add ng-hub-ui
```

```
? Which ng-hub-ui libraries do you want to install? (Press <space> to select, <a> to toggle all, <i> to invert selection)
 ◯ Action Sheet
 ◯ Avatar
 ◯ Badges & Chips
 ◯ Board (Kanban)
 ◯ Breadcrumbs
 ◯ Buttons (FAB, speed dial, dropdown)
 ◯ Calendar
 ◯ Design Tokens (ds)
 ◯ Forms
 ◯ History (undo/redo)
 ◯ Icons
 ◯ Loading (spinners & overlays)
 ◯ Metrics (progress, meter, gauge)
 ◯ Milestones (timeline)
 ◯ Modal
 ◯ Nav
 ◯ Paginable (table & list)
 ◯ Panels (tabs, pills, accordion)
 ◯ Portal
 ◯ Signature
 ◯ Skeleton
 ◯ Sortable
 ◯ Stepper
 ◯ Toast
 ◯ Utils
```

Select one or more libraries with the space bar and confirm. The schematic resolves the matching npm packages (plus any required dependencies), adds them to your `package.json`, and installs them.

### Non-interactive

You can skip the prompt by passing the libraries directly. The prompt shows only the labels, so take the identifiers from the [Installable libraries](#-installable-libraries) table below; pass them comma-separated or repeated:

```bash
# Comma-separated
ng add ng-hub-ui --libraries=modal,paginable,utils

# Repeated flag
ng add ng-hub-ui --libraries=calendar --libraries=stepper
```

To update `package.json` without triggering the package manager install step:

```bash
ng add ng-hub-ui --libraries=modal --skip-install
```

## 🛠️ What the schematic does

The `ng-add` schematic performs exactly the following steps:

1. **Normalizes the selection.** It accepts the libraries chosen in the prompt or passed via flags (array or comma-separated string), de-duplicates them, and fails with a clear error if the selection is empty or contains an unknown library identifier.
2. **Resolves dependencies.** Each selected library is mapped to its npm package and version range. Required peers are pulled in automatically:
    - `avatar`, `badges`, `board`, `buttons`, `calendar`, `forms`, `loading`, `metrics`, `milestones`, `modal`, `nav`, `paginable`, `panels`, `portal`, `signature`, `stepper` and `toast` additionally install `ng-hub-ui-utils`.
    - `panels` additionally installs `ng-hub-ui-ds` (the design-token layer it themes against).
    - `signature` additionally installs `ng-hub-ui-forms` (the form-field shell whose contract the signature field inherits).
    - `sortable` additionally installs the external package `sortablejs`.
3. **Updates `package.json`.** The resolved packages are added to the `dependencies` section of your project's root `package.json`. Existing entries are left untouched (the schematic never overwrites a version you already have pinned).
4. **Installs packages.** Unless `--skip-install` is provided, it schedules a package install task so your package manager (npm/yarn/pnpm, as detected by the Angular CLI) downloads the new dependencies.
5. **Logs the result**, listing the libraries that were installed.

> **Scope note:** The installer's job is dependency wiring only. It does **not** modify `angular.json`, import providers, register components, or add stylesheet entries. After installation, import and configure each library in your app following its own README (linked above).

## 🎛️ Options

| Option           | Type       | Default | Description                                                                                     |
| ---------------- | ---------- | ------- | ----------------------------------------------------------------------------------------------- |
| `--libraries`    | `string[]` | —       | **Required.** Library identifiers to install. Provide via prompt, comma-separated, or repeated. |
| `--skip-install` | `boolean`  | `false` | Update `package.json` only; skip the package manager install step.                              |

## 📦 Installable libraries

The schematic can install the following libraries. The identifier on the left is what you pass to `--libraries`; transitive packages are added automatically.

| Identifier     | npm package                                                                    | Auto-added dependencies              |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------------ |
| `action-sheet` | [ng-hub-ui-action-sheet](https://www.npmjs.com/package/ng-hub-ui-action-sheet) | —                                    |
| `avatar`       | [ng-hub-ui-avatar](https://www.npmjs.com/package/ng-hub-ui-avatar)             | `ng-hub-ui-utils`                    |
| `badges`       | [ng-hub-ui-badges](https://www.npmjs.com/package/ng-hub-ui-badges)             | `ng-hub-ui-utils`                    |
| `board`        | [ng-hub-ui-board](https://www.npmjs.com/package/ng-hub-ui-board)               | `ng-hub-ui-utils`                    |
| `breadcrumbs`  | [ng-hub-ui-breadcrumbs](https://www.npmjs.com/package/ng-hub-ui-breadcrumbs)   | —                                    |
| `buttons`      | [ng-hub-ui-buttons](https://www.npmjs.com/package/ng-hub-ui-buttons)           | `ng-hub-ui-utils`                    |
| `calendar`     | [ng-hub-ui-calendar](https://www.npmjs.com/package/ng-hub-ui-calendar)         | `ng-hub-ui-utils`                    |
| `ds`           | [ng-hub-ui-ds](https://www.npmjs.com/package/ng-hub-ui-ds)                     | —                                    |
| `forms`        | [ng-hub-ui-forms](https://www.npmjs.com/package/ng-hub-ui-forms)               | `ng-hub-ui-utils`                    |
| `history`      | [ng-hub-ui-history](https://www.npmjs.com/package/ng-hub-ui-history)           | —                                    |
| `icons`        | [ng-hub-ui-icons](https://www.npmjs.com/package/ng-hub-ui-icons)               | —                                    |
| `loading`      | [ng-hub-ui-loading](https://www.npmjs.com/package/ng-hub-ui-loading)           | `ng-hub-ui-utils`                    |
| `metrics`      | [ng-hub-ui-metrics](https://www.npmjs.com/package/ng-hub-ui-metrics)           | `ng-hub-ui-utils`                    |
| `milestones`   | [ng-hub-ui-milestones](https://www.npmjs.com/package/ng-hub-ui-milestones)     | `ng-hub-ui-utils`                    |
| `modal`        | [ng-hub-ui-modal](https://www.npmjs.com/package/ng-hub-ui-modal)               | `ng-hub-ui-utils`                    |
| `nav`          | [ng-hub-ui-nav](https://www.npmjs.com/package/ng-hub-ui-nav)                   | `ng-hub-ui-utils`                    |
| `paginable`    | [ng-hub-ui-paginable](https://www.npmjs.com/package/ng-hub-ui-paginable)       | `ng-hub-ui-utils`                    |
| `panels`       | [ng-hub-ui-panels](https://www.npmjs.com/package/ng-hub-ui-panels)             | `ng-hub-ui-ds`, `ng-hub-ui-utils`    |
| `portal`       | [ng-hub-ui-portal](https://www.npmjs.com/package/ng-hub-ui-portal)             | `ng-hub-ui-utils`                    |
| `signature`    | [ng-hub-ui-signature](https://www.npmjs.com/package/ng-hub-ui-signature)       | `ng-hub-ui-forms`, `ng-hub-ui-utils` |
| `skeleton`     | [ng-hub-ui-skeleton](https://www.npmjs.com/package/ng-hub-ui-skeleton)         | —                                    |
| `sortable`     | [ng-hub-ui-sortable](https://www.npmjs.com/package/ng-hub-ui-sortable)         | `sortablejs`                         |
| `stepper`      | [ng-hub-ui-stepper](https://www.npmjs.com/package/ng-hub-ui-stepper)           | `ng-hub-ui-utils`                    |
| `toast`        | [ng-hub-ui-toast](https://www.npmjs.com/package/ng-hub-ui-toast)               | `ng-hub-ui-utils`                    |
| `utils`        | [ng-hub-ui-utils](https://www.npmjs.com/package/ng-hub-ui-utils)               | —                                    |

> `ng-hub-ui-accordion` is deprecated — pick `panels` instead.

## ✋ Manual installation

If you prefer not to use the schematic, install any library directly with your package manager:

```bash
npm install ng-hub-ui-modal ng-hub-ui-paginable
```

Then import and configure each library following its own README, linked in the [Library Family](#-library-family-ng-hub-ui) section above. Remember that some libraries have additional dependencies (for example, `ng-hub-ui-calendar` depends on `ng-hub-ui-utils`, and `ng-hub-ui-sortable` depends on `sortablejs`).

## 🤝 Contribution

We welcome all contributions! Here's how you can help:

```bash
# Clone the repository
git clone https://github.com/carlos-morcillo/ng-hub-ui.git
cd ng-hub-ui

# Install dependencies
npm install
```

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to your branch: `git push origin feature/amazing-feature`
5. **Submit** a pull request

Found a bug or have a request? Open an issue: https://github.com/carlos-morcillo/ng-hub-ui/issues

## ☕ Support

Do you like this project? You can support us by buying us a coffee ☕:
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/carlosmorcillo)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

MIT © ng-hub-ui contributors
