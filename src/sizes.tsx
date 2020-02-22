import { FC } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import { getSize,ThemeSettings, withTheme } from "./theme"

type Props = ThemeSettings & {
  isBlock?: boolean,
}

const createText = (addedSize: number): FC =>
  withTheme(styled.span`
    ${({ normalSize, isBlock }: Props): any => {
      let lines = [`font-size: ${getSize(normalSize, addedSize)};`]
      if (isBlock !== undefined && isBlock) {
        lines = [...lines, `display: block;`]
      }
      return css`
        ${lines.join("")}
      `
    }}
  `)

export const NormalText = createText(0)
export const BigText = createText(3)
export const BiggerText = createText(6)
export const BiggestText = createText(12)
export const SmallText = createText(-1)
export const SmallerText = createText(-2)
export const SmallestText = createText(-3)
