import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { withTheme, getSize, ThemeSettings } from "./theme"

export const BiggestHeading = withTheme(styled.h1`
  font: inherit;
  font-weight: 600;
  ${({ normalSize }: ThemeSettings): any => {
    return css`
      font-size: ${getSize(normalSize, 15)};
    `
  }}
`)

export const BiggerHeading = withTheme(styled.h2`
  font: inherit;
  font-weight: 600;
  ${({ normalSize }: ThemeSettings): any => {
    return css`
      font-size: ${getSize(normalSize, 12)};
    `
  }}
`)

export const BigHeading = withTheme(styled.h3`
  font: inherit;
  font-weight: 600;
  ${({ normalSize }: ThemeSettings): any => {
    return css`
      font-size: ${getSize(normalSize, 9)};
    `
  }}
`)

export const SmallHeading = withTheme(styled.h4`
  font: inherit;
  font-weight: 600;
  ${({ normalSize }: ThemeSettings): any => {
    return css`
      font-size: ${getSize(normalSize, 6)};
    `
  }}
`)

export const SmallerHeading = withTheme(styled.h5`
  font: inherit;
  font-weight: 600;
  ${({ normalSize }: ThemeSettings): any => {
    return css`
      font-size: ${getSize(normalSize, 3)};
    `
  }}
`)

export const SmallestHeading = withTheme(styled.h6`
  font: inherit;
  font-weight: 600;
  ${({ normalSize }: ThemeSettings): any => {
    return css`
      font-size: ${getSize(normalSize, 0)};
    `
  }}
`)
