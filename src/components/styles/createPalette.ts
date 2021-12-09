import { deepmerge } from "@mui/utils";
// import KylinUIError from '@mui/utils/macros/KylinUIError.macro';
import { darken, getContrastRatio, lighten } from "@mui/system";
import {
  common,
  grey,
  purple,
  red,
  orange,
  blue,
  lightBlue,
  green,
} from "../colors";
import { Palette, PaletteOptions } from "./types/palette";
import yellow from "../colors/yellow";
import cyan from "../colors/cyan";
import geekBlue from "../colors/geekBlue";

export const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: blue[500],
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)",
    pla: "rgba(0, 0, 0, 0.38)",
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common.white,
    default: common.white,
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};

export const dark = {
  text: {
    primary: common.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)",
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212",
  },
  action: {
    active: common.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
};

function addLightOrDark(
  intent: any,
  direction: any,
  shade: any,
  tonalOffset: any
) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === "light") {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === "dark") {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}

function getDefaultPrimary(mode = "light") {
  if (mode === "dark") {
    return {
      main: blue[200],
      light: blue[50],
      dark: blue[400],
    };
  }
  return {
    main: blue[500],
    light: blue[50],
    dark: blue[600],
  };
}

function getDefaultSecondary(mode = "light") {
  if (mode === "dark") {
    return {
      main: purple[200],
      light: purple[50],
      dark: purple[400],
    };
  }
  return {
    main: purple[500],
    light: purple[200],
    dark: purple[600],
  };
}

function getDefaultError(mode = "light") {
  if (mode === "dark") {
    return {
      main: red[400],
      light: red[300],
      dark: red[500],
    };
  }
  return {
    main: red[400],
    light: red[50],
    dark: red[500],
  };
}

function getDefaultInfo(mode = "light") {
  if (mode === "dark") {
    return {
      main: blue[200],
      light: blue[50],
      dark: blue[400],
    };
  }
  return {
    main: blue[500],
    light: blue[50],
    dark: blue[600],
  };
}

function getDefaultSuccess(mode = "light") {
  if (mode === "dark") {
    return {
      main: green[400],
      light: green[300],
      dark: green[700],
    };
  }
  return {
    main: green[400],
    light: green[50],
    dark: green[500],
  };
}

function getDefaultWarning(mode = "light") {
  if (mode === "dark") {
    return {
      main: orange[400],
      light: orange[300],
      dark: orange[700],
    };
  }
  return {
    main: yellow[500], // closest to orange[800] that pass 3:1.
    light: yellow[50],
    dark: yellow[600],
  };
}

export default function createPalette(palette: PaletteOptions): Palette {
  const {
    mode = "light",
    contrastThreshold = 3,
    tonalOffset = 0.2,
    ...other
  } = palette;

  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning = palette.warning || getDefaultWarning(mode);

  // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
  function getContrastText(background: any) {
    const contrastText =
      getContrastRatio(background, dark.text.primary) >= contrastThreshold
        ? dark.text.primary
        : light.text.primary;

    if (process.env.NODE_ENV !== "production") {
      const contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error(
          [
            `KylinUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`,
            "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.",
            "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast",
          ].join("\n")
        );
      }
    }

    return contrastText;
  }

  const augmentColor = ({
    color,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700,
  }: any) => {
    color = { ...color };
    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.hasOwnProperty("main")) {
      // throw new KylinUIError(
      //   'MUI: The color%s provided to augmentColor(color) is invalid.\n' +
      //     'The color object needs to have a `main` property or a `%s` property.',
      //   name ? ` (${name})` : '',
      //   mainShade,
      // );
    }

    if (typeof color.main !== "string") {
      // throw new KylinUIError(
      //   'MUI: The color%s provided to augmentColor(color) is invalid.\n' +
      //     '`color.main` should be a string, but `%s` was provided instead.\n' +
      //     '\n' +
      //     'Did you intend to use one of the following approaches?\n' +
      //     '\n' +
      //     'import { green } from "@mui/material/colors";\n' +
      //     '\n' +
      //     'const theme1 = createTheme({ palette: {\n' +
      //     '  primary: green,\n' +
      //     '} });\n' +
      //     '\n' +
      //     'const theme2 = createTheme({ palette: {\n' +
      //     '  primary: { main: green[500] },\n' +
      //     '} });',
      //   name ? ` (${name})` : '',
      //   JSON.stringify(color.main),
      // );
    }

    addLightOrDark(color, "light", lightShade, tonalOffset);
    addLightOrDark(color, "dark", darkShade, tonalOffset);
    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  const modes = { dark, light };

  if (process.env.NODE_ENV !== "production") {
    if (!modes[mode]) {
      console.error(`KylinUI: The palette mode \`${mode}\` is not supported.`);
    }
  }

  const paletteOutput = deepmerge(
    {
      // The grey colors.
      grey,
      blue,
      red,
      yellow,
      orange,
      green,
      cyan,
      purple,
      lightBlue,
      geekBlue,
      // A collection of common colors.
      common,
      // The palette mode, can be light or dark.
      mode,
      // The colors used to represent primary interface elements for a user.
      primary: augmentColor({ color: primary, name: "primary" }),
      // The colors used to represent secondary interface elements for a user.
      secondary: augmentColor({
        color: secondary,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700",
      }),
      // The colors used to represent interface elements that the user should be made aware of.
      error: augmentColor({ color: error, name: "error" }),
      // The colors used to represent potentially dangerous actions or important messages.
      warning: augmentColor({ color: warning, name: "warning" }),
      // The colors used to present information to the user that is neutral and not necessarily important.
      info: augmentColor({ color: info, name: "info" }),
      // The colors used to indicate the successful completion of an action that user triggered.
      success: augmentColor({ color: success, name: "success" }),
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold,
      // Takes a background color and returns the text color that maximizes the contrast.
      getContrastText,
      // Generate a rich color object.
      augmentColor,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset,
      // The light and dark mode object.
      ...modes[mode],
    },
    other
  );

  return paletteOutput;
}
