import {
  createTheme as systemCreateTheme
} from "@mui/system";
import { ThemeOptions, Theme } from './types/theme';
import deepmerge from "../utils/deepmerge";
import generateUtilityClass from "../utils/generateUtilityClass";
import createMixins from "./createMixins";
import createPalette from "./createPalette";
import createTransitions from "./createTransitions";
import createTypography from "./createTypography";
import shadows from './shadows';
import zIndex from './zIndex';

export function createTheme(options: ThemeOptions = {}, ...args: object[]): Theme {
  const {
    breakpoints: breakpointsInput,
    mixins: mixinsInput = {},
    spacing: spacingInput,
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {},
    shape: shapeInput,
    ...other
  } = options;

  const palette = createPalette(paletteInput);
  const systemTheme = systemCreateTheme(options);

  let kylinUITheme = deepmerge(systemTheme, {
    mixins: createMixins(
      systemTheme.breakpoints,
      systemTheme.spacing,
      mixinsInput
    ),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: { ...zIndex },
  });

  kylinUITheme = deepmerge(kylinUITheme, other);
  kylinUITheme = args.reduce(
    (acc, argument) => deepmerge(acc, argument),
    kylinUITheme
  ) as any;

  if (process.env.NODE_ENV !== "production") {
    const stateClasses = [
      "active",
      "checked",
      "completed",
      "disabled",
      "error",
      "expanded",
      "focused",
      "focusVisible",
      "required",
      "selected",
    ];

    const traverse = (node: any, component: any) => {
      let key;

      // eslint-disable-next-line guard-for-in, no-restricted-syntax
      for (key in node) {
        const child = node[key];
        if (stateClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const stateClass = generateUtilityClass("", key);
            console.error(
              [
                `KylinUI: The \`${component}\` component increases ` +
                  `the CSS specificity of the \`${key}\` internal state.`,
                "You can not override it like this: ",
                JSON.stringify(node, null, 2),
                "",
                `Instead, you need to use the '&.${stateClass}' syntax:`,
                JSON.stringify(
                  {
                    root: {
                      [`&.${stateClass}`]: child,
                    },
                  },
                  null,
                  2
                ),
                "",
                "https://KylinUI.com/r/state-classes-guide",
              ].join("\n")
            );
          }
          // Remove the style to prevent global conflicts.
          node[key] = {};
        }
      }
    };

    Object.keys(kylinUITheme.components!).forEach((component) => {
      const styleOverrides = kylinUITheme.components?.[component].styleOverrides;

      if (styleOverrides && component.indexOf("KylinUI") === 0) {
        traverse(styleOverrides, component);
      }
    });
  }

  return kylinUITheme as any;
}
