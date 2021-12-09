import { Color, PaletteMode } from "../../types";
import yellow from "../../colors/yellow";

export {};
// use standalone interface over typeof colors/commons
// to enable module augmentation
export interface CommonColors {
  black: string;
  white: string;
}

export type ColorPartial = Partial<Color>;

export interface TypeText {
  primary: string;
  secondary: string;
  disabled: string;
  icon?: string;
}

export interface TypeAction {
  active: string;
  hover: string;
  hoverOpacity: number;
  selected: string;
  selectedOpacity: number;
  disabled: string;
  disabledOpacity: number;
  disabledBackground: string;
  focus: string;
  focusOpacity: number;
  activatedOpacity: number;
}

export interface TypeBackground {
  default: string;
  paper: string;
}

export type TypeDivider = string;

export type PaletteColorOptions = SimplePaletteColorOptions | ColorPartial;

export interface SimplePaletteColorOptions {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

export interface PaletteColor {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export interface TypeObject {
  text: TypeText;
  action: TypeAction;
  divider: TypeDivider;
  background: TypeBackground;
}

export type PaletteTonalOffset =
  | number
  | {
      light: number;
      dark: number;
    };

export interface PaletteAugmentColorOptions {
  color: PaletteColorOptions;
  mainShade?: number | string;
  lightShade?: number | string;
  darkShade?: number | string;
  name?: number | string;
}

export interface Palette {
  /** 灰色 */
  grey: Color;
  /** 主色蓝 */
  blue: Color;
  /** 珊瑚红 */
  red: Color;
  /** 蜜黄色 */
  yellow: Color;
  /** 日落橙 */
  orange: Color;
  /** 生命绿 */
  green: Color;
  /** 海洋青 */
  cyan: Color;
  /** 优雅紫 */
  purple: Color;
  /** 沉稳蓝 */
  lightBlue: Color;
  /** 科技蓝 */
  geekBlue: Color;
  common: CommonColors;
  mode: PaletteMode;
  contrastThreshold: number;
  tonalOffset: PaletteTonalOffset;
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  text: TypeText;
  divider: TypeDivider;
  action: TypeAction;
  background: TypeBackground;
  getContrastText: (background: string) => string;
  augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor;
}

export type PartialTypeObject = {
  [P in keyof TypeObject]?: Partial<TypeObject[P]>;
};

export interface PaletteOptions {
  primary?: PaletteColorOptions;
  secondary?: PaletteColorOptions;
  error?: PaletteColorOptions;
  warning?: PaletteColorOptions;
  info?: PaletteColorOptions;
  success?: PaletteColorOptions;
  mode?: PaletteMode;
  tonalOffset?: PaletteTonalOffset;
  contrastThreshold?: number;
  common?: Partial<CommonColors>;
  grey?: ColorPartial;
  text?: Partial<TypeText>;
  divider?: string;
  action?: Partial<TypeAction>;
  background?: Partial<TypeBackground>;
  getContrastText?: (background: string) => string;
}
