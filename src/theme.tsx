import React, { ComponentType, FC, ReactElement } from "react"

export interface ThemeSettings {
  normalSize: string;
  dark: string;
  darker: string;
  darkest: string;
  light: string;
  lighter: string;
  lightest: string;
}

let theme: ThemeSettings = {
  normalSize: "14px",
  dark: "#666666",
  darker: "#444444",
  darkest: "#222222",
  light: "#AAAAAA",
  lighter: "#CCCCCC",
  lightest: "#EEEEEE",
}

export const setTheme = (settings: ThemeSettings): void => {
  theme = {
    ...theme,
    ...settings,
  }
}

export const withTheme = (Component: ComponentType): FC => {
  return (props: any): ReactElement => (
    <Component {...props} {...theme} />
  )
}

type Size = (string | number)
export const getSize = (...sizes: Size[]): string => {
  const total = sizes
    .map((s: Size): number => parseInt((s as string)))
    .reduce((a: number, b: number): number => (a + b), 0)
  return `${total}px`
}
