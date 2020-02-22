import { css } from "@emotion/core"
import styled from "@emotion/styled"

import { ThemeSettings, withTheme } from "./theme"

export const DarkText = withTheme(styled.span`
  ${({ dark }: ThemeSettings): any =>
    css`
      color: ${dark};
    `}
`)

export const DarkerText = withTheme(styled.span`
  ${({ darker }: ThemeSettings): any =>
    css`
      color: ${darker};
    `}
`)

export const DarkestText = withTheme(styled.span`
  ${({ darkest }: ThemeSettings): any =>
    css`
      color: ${darkest};
    `}
`)

export const LightText = withTheme(styled.span`
  ${({ light }: ThemeSettings): any =>
    css`
      color: ${light};
    `}
`)

export const LighterText = withTheme(styled.span`
  ${({ lighter }: ThemeSettings): any =>
    css`
      color: ${lighter};
    `}
`)

export const LightestText = withTheme(styled.span`
  ${({ lightest }: ThemeSettings): any =>
    css`
      color: ${lightest};
    `}
`)
