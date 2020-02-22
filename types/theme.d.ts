import React from "react";
export interface ThemeSettings {
    normalSize: string;
    dark: string;
    darker: string;
    darkest: string;
    light: string;
    lighter: string;
    lightest: string;
}
export declare const setTheme: (settings: ThemeSettings) => void;
export declare const withTheme: (Component: React.ComponentType<{}>) => React.FC<{}>;
declare type Size = (string | number);
export declare const getSize: (...sizes: Size[]) => string;
export {};
