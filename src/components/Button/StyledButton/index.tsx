import styled, { rootShouldForwardProp } from "../../styles/styled";
import { ButtonBase } from "../../ButtonBase/ButtonBase";
import { unstable_capitalize as capitalize } from "@mui/utils";
import { alpha } from "@mui/system";
import buttonClasses from "../classes";
import { StyledInnerOptions, StyledOptions } from "../../styles/types/styled";
import { ButtonProps } from "../types";
import { computeContainedStyle } from "./computeContainedStyle";
import { computeOutlineStyle } from "./computeOutlineStyle";
import { computeTextStyle } from "./computeTextStyle";

const options: StyledOptions = {
  shouldForwardProp: (prop) => {
    return rootShouldForwardProp(prop) || prop === "classes";
  },
  name: "KylinUIButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      styles[ownerState.variant],
      styles[`${ownerState.variant}${capitalize(ownerState.color)}`],
      styles[`size${capitalize(ownerState.size)}`],
      styles[`${ownerState.variant}Size${capitalize(ownerState.size)}`],
      ownerState.color === "inherit" && styles.colorInherit,
      ownerState.disableElevation && styles.disableElevation,
      ownerState.fullWidth && styles.fullWidth,
    ];
  },
};

export const CreateStyledButton = styled(ButtonBase, options);

const innerOptions1: StyledInnerOptions<typeof CreateStyledButton> = (
  params
) => {
  const { theme } = params;

  console.log("theme =", theme);

  const ownerState = params.ownerState as ButtonProps;

  // console.log({ theme });

  const baseStyle = {
    ...theme.typography.button,
    minWidth: 64,
    padding: "5px 16px",
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(
      ["background-color", "box-shadow", "border-color", "color"],
      {
        duration: theme.transitions.duration.short,
      }
    ),

    [`&.${buttonClasses.disabled}`]: {
      color: theme.palette.action.disabled,
    },
  };

  switch (ownerState.variant) {
    case "contained":
      // @ts-ignore
      return { ...baseStyle, ...computeContainedStyle(params) };

    case "outlined":
      // @ts-ignore
      return { ...baseStyle, ...computeOutlineStyle(params) };

    case "text":
      // @ts-ignore
      return { ...baseStyle, ...computeTextStyle(params) };

    default:
      return baseStyle;
  }
};

const innerOptions2: StyledInnerOptions<typeof CreateStyledButton> = ({
  ownerState,
}) => {
  return (
    ownerState.disableElevation && {
      // return {
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none",
      },
      [`&.${buttonClasses.focusVisible}`]: {
        boxShadow: "none",
      },
      "&:active": {
        boxShadow: "none",
      },
      [`&.${buttonClasses.disabled}`]: {
        boxShadow: "none",
      },
    }
  );
};

export const StyledButton = CreateStyledButton(innerOptions1, innerOptions2);
