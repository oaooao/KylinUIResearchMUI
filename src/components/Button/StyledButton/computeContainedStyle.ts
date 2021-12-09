import { CreateStyledButton } from "./index";
import { StyledInnerOptions } from "../../styles/types/styled";
import { ButtonProps } from "../types";
import buttonClasses from "../classes";

export const computeContainedStyle: StyledInnerOptions<
  typeof CreateStyledButton
> = ({ theme, ownerState }) => {
  const { palette } = theme;

  const { color } = ownerState as ButtonProps;

  const $color = palette[color!];

  console.log("theme =", theme);

  return {
    // color: theme.palette.getContrastText(theme.palette.grey[300]),
    color: $color.contrastText,
    // color: "#F7FAFF",
    // color: "#fff",
    backgroundColor: $color.main,
    boxShadow: theme.shadows[2],
    "@media (hover: none)": {
      backgroundColor: $color.main,
    },

    "&:hover": {
      backgroundColor: $color.dark,
      boxShadow: theme.shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: theme.shadows[2],
        backgroundColor: $color.main,
      },
    },

    "&:active": {
      boxShadow: theme.shadows[8],
    },

    [`&.${buttonClasses.focusVisible}`]: {
      boxShadow: theme.shadows[6],
    },

    [`&.${buttonClasses.disabled}`]: {
      color: theme.palette.action.disabled,
      boxShadow: theme.shadows[0],
      backgroundColor: theme.palette.action.disabledBackground,
    },

    ...(ownerState.size === "small" && {
      padding: "4px 10px",
      fontSize: theme.typography.pxToRem(13),
    }),
    ...(ownerState.size === "large" && {
      padding: "8px 22px",
      fontSize: theme.typography.pxToRem(15),
    }),

    ...(ownerState.fullWidth && {
      width: "100%",
    }),
  };
};
