import React, { ReactElement, ReactNode } from "react"
import styled from "@emotion/styled"

import { withTheme } from "./theme"

export const BoldText = styled.span`
  font-weight: 600;
`

export const UppercaseText = styled.span`
  text-transform: uppercase;
`

interface Props {
  children: ReactNode | ReactNode[];
}

export const SuperText = withTheme(({ children }: Props): ReactElement => (
  <BoldText>
    <UppercaseText>{children}</UppercaseText>
  </BoldText>
))
