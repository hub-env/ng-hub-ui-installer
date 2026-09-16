# ng-hub-ui

**Español** | [English](./README.md)

El instalador oficial y punto de entrada de la familia de bibliotecas de componentes Angular **ng-hub-ui**. Ejecuta un único comando `ng add ng-hub-ui`, elige las bibliotecas que necesitas y deja que el schematic conecte las dependencias en tu proyecto.

> Este es el paquete instalador paraguas. No incluye componentes de UI por sí mismo: instala en tu aplicación las bibliotecas individuales `ng-hub-ui-*` que se listan más abajo.

## Documentación y ejemplos en vivo

Este paquete forma parte de [Hub UI](https://hubui.dev/en/), una colección de bibliotecas de componentes Angular para aplicaciones standalone.

- Hub UI: https://hubui.dev/en/
- Hub UI en GitHub (incidencias, roadmap y cómo contribuir): https://github.com/hub-env/hub-ui
- Referencia de cada biblioteca que el instalador puede añadir: `https://hubui.dev/en/<biblioteca>/overview/` — por ejemplo https://hubui.dev/en/modal/overview/

- Página propia del instalador: https://hubui.dev/es/installer/overview/ — las órdenes, el diálogo y lo que escribe una selección; las tablas completas de opciones y catálogo siguen aquí.

## 🧩 Familia de bibliotecas `ng-hub-ui`

`ng-hub-ui` es el instalador de la familia. Estas son las bibliotecas que componen el ecosistema:

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

> [`ng-hub-ui-accordion`](https://www.npmjs.com/package/ng-hub-ui-accordion) está **obsoleta** — su vista acordeón vive, mejorada, en [`ng-hub-ui-panels`](https://www.npmjs.com/package/ng-hub-ui-panels).

---

## 📋 Tabla de contenidos

- [🚀 Instalación](#-instalación)
- [⚙️ Uso](#️-uso)
- [🛠️ Qué hace el schematic](#️-qué-hace-el-schematic)
- [🎛️ Opciones](#️-opciones)
- [📦 Bibliotecas instalables](#-bibliotecas-instalables)
- [✋ Instalación manual](#-instalación-manual)
- [🤝 Contribución](#-contribución)
- [☕ Apoyo](#-apoyo)
- [📄 Licencia](#-licencia)

---

## 🚀 Instalación

La forma recomendada de añadir ng-hub-ui a tu proyecto Angular es el comando `ng add` de la CLI de Angular, que ejecuta el schematic instalador de forma interactiva:

```bash
ng add ng-hub-ui
```

La CLI de Angular descarga el paquete `ng-hub-ui` y ejecuta su schematic `ng-add`.

## ⚙️ Uso

### Interactivo

Ejecutar el comando sin argumentos lanza un prompt de selección múltiple:

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

Selecciona una o varias bibliotecas con la barra espaciadora y confirma. El schematic resuelve los paquetes npm correspondientes (más las dependencias necesarias), los añade a tu `package.json` y los instala.

### No interactivo

Puedes omitir el prompt pasando las bibliotecas directamente. El prompt solo muestra las etiquetas, así que toma los identificadores de la tabla [Bibliotecas instalables](#-bibliotecas-instalables); pásalos separados por comas o repitiendo el flag:

```bash
# Separados por comas
ng add ng-hub-ui --libraries=modal,paginable,utils

# Flag repetido
ng add ng-hub-ui --libraries=calendar --libraries=stepper
```

Para actualizar `package.json` sin lanzar la instalación del gestor de paquetes:

```bash
ng add ng-hub-ui --libraries=modal --skip-install
```

## 🛠️ Qué hace el schematic

El schematic `ng-add` realiza exactamente los siguientes pasos:

1. **Normaliza la selección.** Acepta las bibliotecas elegidas en el prompt o pasadas por flags (array o cadena separada por comas), elimina duplicados y falla con un error claro si la selección está vacía o contiene un identificador de biblioteca desconocido.
2. **Resuelve las dependencias.** Cada biblioteca seleccionada se mapea a su paquete npm y rango de versión. Las dependencias requeridas se incorporan automáticamente:
    - `avatar`, `badges`, `board`, `buttons`, `calendar`, `forms`, `loading`, `metrics`, `milestones`, `modal`, `nav`, `paginable`, `panels`, `portal`, `signature`, `stepper` y `toast` instalan además `ng-hub-ui-utils`.
    - `panels` instala además `ng-hub-ui-ds` (la capa de design tokens sobre la que se tematiza).
    - `signature` instala además `ng-hub-ui-forms` (la envoltura de campo de formulario cuyo contrato hereda el campo de firma).
    - `sortable` instala además el paquete externo `sortablejs`.
3. **Actualiza `package.json`.** Los paquetes resueltos se añaden a la sección `dependencies` del `package.json` raíz de tu proyecto. Las entradas existentes se respetan (el schematic nunca sobrescribe una versión que ya tengas fijada).
4. **Instala los paquetes.** A menos que se indique `--skip-install`, programa una tarea de instalación para que tu gestor de paquetes (npm/yarn/pnpm, según detecte la CLI de Angular) descargue las nuevas dependencias.
5. **Registra el resultado**, listando las bibliotecas que se han instalado.

> **Nota sobre el alcance:** La función del instalador es únicamente conectar dependencias. **No** modifica `angular.json`, no importa providers, no registra componentes ni añade entradas de hojas de estilo. Tras la instalación, importa y configura cada biblioteca en tu aplicación siguiendo su propio README (enlazado más arriba).

## 🎛️ Opciones

| Opción           | Tipo       | Por defecto | Descripción                                                                                              |
| ---------------- | ---------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `--libraries`    | `string[]` | —           | **Obligatorio.** Identificadores de bibliotecas a instalar. Vía prompt, separados por comas o repetidos. |
| `--skip-install` | `boolean`  | `false`     | Actualiza solo `package.json`; omite el paso de instalación del gestor de paquetes.                      |

## 📦 Bibliotecas instalables

El schematic puede instalar las siguientes bibliotecas. El identificador de la izquierda es lo que pasas a `--libraries`; los paquetes transitivos se añaden automáticamente.

| Identificador  | Paquete npm                                                                    | Dependencias añadidas automáticamente |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------------- |
| `action-sheet` | [ng-hub-ui-action-sheet](https://www.npmjs.com/package/ng-hub-ui-action-sheet) | —                                     |
| `avatar`       | [ng-hub-ui-avatar](https://www.npmjs.com/package/ng-hub-ui-avatar)             | `ng-hub-ui-utils`                     |
| `badges`       | [ng-hub-ui-badges](https://www.npmjs.com/package/ng-hub-ui-badges)             | `ng-hub-ui-utils`                     |
| `board`        | [ng-hub-ui-board](https://www.npmjs.com/package/ng-hub-ui-board)               | `ng-hub-ui-utils`                     |
| `breadcrumbs`  | [ng-hub-ui-breadcrumbs](https://www.npmjs.com/package/ng-hub-ui-breadcrumbs)   | —                                     |
| `buttons`      | [ng-hub-ui-buttons](https://www.npmjs.com/package/ng-hub-ui-buttons)           | `ng-hub-ui-utils`                     |
| `calendar`     | [ng-hub-ui-calendar](https://www.npmjs.com/package/ng-hub-ui-calendar)         | `ng-hub-ui-utils`                     |
| `ds`           | [ng-hub-ui-ds](https://www.npmjs.com/package/ng-hub-ui-ds)                     | —                                     |
| `forms`        | [ng-hub-ui-forms](https://www.npmjs.com/package/ng-hub-ui-forms)               | `ng-hub-ui-utils`                     |
| `history`      | [ng-hub-ui-history](https://www.npmjs.com/package/ng-hub-ui-history)           | —                                     |
| `icons`        | [ng-hub-ui-icons](https://www.npmjs.com/package/ng-hub-ui-icons)               | —                                     |
| `loading`      | [ng-hub-ui-loading](https://www.npmjs.com/package/ng-hub-ui-loading)           | `ng-hub-ui-utils`                     |
| `metrics`      | [ng-hub-ui-metrics](https://www.npmjs.com/package/ng-hub-ui-metrics)           | `ng-hub-ui-utils`                     |
| `milestones`   | [ng-hub-ui-milestones](https://www.npmjs.com/package/ng-hub-ui-milestones)     | `ng-hub-ui-utils`                     |
| `modal`        | [ng-hub-ui-modal](https://www.npmjs.com/package/ng-hub-ui-modal)               | `ng-hub-ui-utils`                     |
| `nav`          | [ng-hub-ui-nav](https://www.npmjs.com/package/ng-hub-ui-nav)                   | `ng-hub-ui-utils`                     |
| `paginable`    | [ng-hub-ui-paginable](https://www.npmjs.com/package/ng-hub-ui-paginable)       | `ng-hub-ui-utils`                     |
| `panels`       | [ng-hub-ui-panels](https://www.npmjs.com/package/ng-hub-ui-panels)             | `ng-hub-ui-ds`, `ng-hub-ui-utils`     |
| `portal`       | [ng-hub-ui-portal](https://www.npmjs.com/package/ng-hub-ui-portal)             | `ng-hub-ui-utils`                     |
| `signature`    | [ng-hub-ui-signature](https://www.npmjs.com/package/ng-hub-ui-signature)       | `ng-hub-ui-forms`, `ng-hub-ui-utils`  |
| `skeleton`     | [ng-hub-ui-skeleton](https://www.npmjs.com/package/ng-hub-ui-skeleton)         | —                                     |
| `sortable`     | [ng-hub-ui-sortable](https://www.npmjs.com/package/ng-hub-ui-sortable)         | `sortablejs`                          |
| `stepper`      | [ng-hub-ui-stepper](https://www.npmjs.com/package/ng-hub-ui-stepper)           | `ng-hub-ui-utils`                     |
| `toast`        | [ng-hub-ui-toast](https://www.npmjs.com/package/ng-hub-ui-toast)               | `ng-hub-ui-utils`                     |
| `utils`        | [ng-hub-ui-utils](https://www.npmjs.com/package/ng-hub-ui-utils)               | —                                     |

> `ng-hub-ui-accordion` está obsoleta — elige `panels` en su lugar.

## ✋ Instalación manual

Si prefieres no usar el schematic, instala cualquier biblioteca directamente con tu gestor de paquetes:

```bash
npm install ng-hub-ui-modal ng-hub-ui-paginable
```

Después importa y configura cada biblioteca siguiendo su propio README, enlazado en la sección [Familia de bibliotecas](#-familia-de-bibliotecas-ng-hub-ui). Recuerda que algunas bibliotecas tienen dependencias adicionales (por ejemplo, `ng-hub-ui-calendar` depende de `ng-hub-ui-utils`, y `ng-hub-ui-sortable` depende de `sortablejs`).

## 🤝 Contribución

¡Toda contribución es bienvenida! Así puedes ayudar:

```bash
# Clona el repositorio
git clone --recurse-submodules https://github.com/hub-env/hub-ui.git
cd hub-ui

# Instala las dependencias
npm install
```

1. **Haz un fork** del repositorio
2. **Crea** una rama de feature: `git checkout -b feature/amazing-feature`
3. **Haz commit** de tus cambios: `git commit -m 'Add amazing feature'`
4. **Haz push** a tu rama: `git push origin feature/amazing-feature`
5. **Abre** un pull request

¿Has encontrado un error o tienes una petición? Abre una incidencia: https://github.com/hub-env/hub-ui/issues

## ☕ Apoyo

¿Te gusta este proyecto? Puedes apoyarnos invitándonos a un café ☕:
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/carlosmorcillo)

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

MIT © ng-hub-ui contributors
