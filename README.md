# Text Components

Components for displaying text. Best used with a global `font-size: 10px`.

## Installation

```bash
yarn add @alexseitsinger/react-text-components
```

## Exports

#### setTheme

Set the configuration settings for the components to use.

```javascript
import { setTheme } from "@alexseitsinger/react-text-components"

setTheme({
  normalSize: 14,
  dark: "#666",
  darker: "#444",
  darkest: "#222",
  light: "#AAA",
  lighter: "#CCC"
  lightest: "#EEE",
})
```

#### Headings

All headings have `font: inherit` and `font-weight: 600`

Name            | Description
---             | ---
BigHeading      | `h3` tag with `font-size: <NORMAL_SIZE> + 6px`
BiggerHeading   | `h2` tag with `font-size: <NORMAL_SIZE> + 12px`
BiggestHeading  | `h1` tag with `font-size: <NORMAL_SIZE> + 18px`
SmallHeading    | `h4` tag with `font-size: <NORMAL_SIZE> - 1px`
SmallerHeading  | `h5` tag with `font-size: <NORMAL_SIZE> - 2px`
SmallestHeading | `h6` tag with `font-size: <NORMAL_SIZE> - 3px`

#### Sizes

All sizes accept the following props:

Name    | Description          | Default   | Required?
---     | ---                  | ---       | ---
isBlock | Use `display: block` | undefined | no

Name         | Description
---          | ---
NormalText   | `span` tag with `font-size: <NORMAL_SIZE>`
BigText      | `span` tag with `font-size: <NORMAL_SIZE> + 2px`
BiggerText   | `span` tag with `font-size: <NORMAL_SIZE> + 4px`
BiggestText  | `span` tag with `font-size: <NORMAL_SIZE> + 6px`
SmallText    | `span` tag with `font-size: <NORMAL_SIZE> - 1px`
SmallerText  | `span` tag with `font-size: <NORMAL_SIZE> - 2px`
SmallestText | `span` tag with `font-size: <NORMAL_SIZE> - 3px`

#### Weights

Name        | Description
---         | ---
BoldText    | `span` tag with `font-weight: 500`
BoldestText | `span` tag with `font-weight: 600`

#### Colors

All colors require the theme to be set at runtime via `setTheme`.

Name         | Description
---          | ---
DarkText     | `span` tag with `color: <DARK>`
DarkerText   | `span` tag with `color: <DARKER>`
DarkestText  | `span` tag with `color: <DARKEST>`
LightText    | `span` tag with `color: <LIGHT>`
LighterText  | `span` tag with `color: <LIGHTER>`
LightestText | `span` tag with `color: <LIGHTEST>`


#### Special

Name      | Description
---       | ---
InsetText | `span` tag with `color: <DARK>` and `text-shadow: 0 1px 0 #FFFFFF`
SuperText | `span` tag using both `BoldestText` and `SmallerText` with `text-transform: uppercase`
