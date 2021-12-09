import { StyledInnerOptions } from "../../styles/types/styled";
import { CreateStyledButton } from "./index";
import { ButtonProps } from "../types";
import buttonClasses from "../classes";

export const computeTextStyle: StyledInnerOptions<
  typeof CreateStyledButton
> = ({ theme, ownerState }) => {
  const { palette } = theme;

  const { color } = ownerState as ButtonProps;

  const $color = palette[color!];

  return {
    padding: "6px 8px",
    color: $color.main,

    "&:hover": {
      // border: `1px solid transparent`,
      backgroundColor: $color.light,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
  };
};
