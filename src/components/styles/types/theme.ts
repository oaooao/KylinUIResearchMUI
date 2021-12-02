import {
  ThemeOptions as SystemThemeOptions,
  Theme as SystemTheme,
} from "@mui/system";
import { Components } from "./components";
import { MixinsOptions, Mixins } from "./mixins";
import { PaletteOptions, Palette } from "./palette";
import { Shadows } from "./shadows";
import { TransitionsOptions, Transitions } from "./transitions";
import { TypographyOptions, Typography } from "./typography";
import { ZIndexOptions, ZIndex } from "./zIndex";

export interface ThemeOptions extends SystemThemeOptions {
  mixins?: MixinsOptions;
  components?: Components;
  palette?: PaletteOptions;
  shadows?: Shadows;
  transitions?: TransitionsOptions;
  typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
  zIndex?: ZIndexOptions;
  unstable_strictMode?: boolean;
}

/**
 * Our [TypeScript guide on theme customization](https://KylinUI.com/guides/typescript/#customization-of-theme) explains in detail how you would add custom properties.
 */
export interface Theme extends SystemTheme {
  mixins: Mixins;
  components?: Components;
  palette: Palette;
  shadows: Shadows;
  transitions: Transitions;
  typography: Typography;
  zIndex: ZIndex;
  unstable_strictMode?: boolean;
}