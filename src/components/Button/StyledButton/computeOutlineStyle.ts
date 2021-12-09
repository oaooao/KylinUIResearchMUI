import { StyledInnerOptions } from "../../styles/types/styled";
import { CreateStyledButton } from "./index";
import { ButtonProps } from "../types";
import { alpha } from "@mui/system";
import buttonClasses from "../classes";

export const computeOutlineStyle: StyledInnerOptions<
  typeof CreateStyledButton
> = ({ theme, ownerState }) => {
  const { palette } = theme;

  const { color } = ownerState as ButtonProps;

  const $color = palette[color!];

  return {
    padding: "5px 15px",
    color: $color.main,
    border: `1px solid ${alpha($color.main, 0.5)}`,
    backgroundColor: alpha($color.main, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent",
    },

    "&:hover": {
      border: `1px solid transparent`,
      backgroundColor: $color.light,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: theme.shadows[2],
        backgroundColor: "transparent",
      },
    },

    [`&.${buttonClasses.disabled}`]: {
      color: theme.palette.action.disabled,
      boxShadow: theme.shadows[0],
      border: `1px solid ${theme.palette.action.disabledBackground}`,
    },
  };
};
