import React from "react";
import { unstable_capitalize as capitalize } from "@mui/utils";
import clsx from "clsx";
import styled from "../styles/styled";
import useThemeProps from "../styles/useThemeProps";
import { useUtilityClasses } from "./useUtilityClasses";
import { StyledButton } from "./StyledButton/index";
import { ButtonProps } from "./types";

const commonIconStyles = (ownerState: any) => ({
  ...(ownerState.size === "small" && {
    "& > *:nth-of-type(1)": {
      fontSize: 18,
    },
  }),
  ...(ownerState.size === "medium" && {
    "& > *:nth-of-type(1)": {
      fontSize: 20,
    },
  }),
  ...(ownerState.size === "large" && {
    "& > *:nth-of-type(1)": {
      fontSize: 22,
    },
  }),
});

const ButtonStartIcon = styled<any>("span", {
  name: "KylinUIButton",
  slot: "StartIcon",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.startIcon, styles[`iconSize${capitalize(ownerState.size)}`]];
  },
})(({ ownerState }: any) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  ...(ownerState.size === "small" && {
    marginLeft: -2,
  }),
  ...commonIconStyles(ownerState),
}));

const ButtonEndIcon = styled<any>("span", {
  name: "KylinUIButton",
  slot: "EndIcon",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.endIcon, styles[`iconSize${capitalize(ownerState.size)}`]];
  },
})(({ ownerState }: any) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  ...(ownerState.size === "small" && {
    marginRight: -2,
  }),
  ...commonIconStyles(ownerState),
}));

export const Button = React.forwardRef<any, ButtonProps>(function Button(
  inProps,
  ref
) {
  const props = useThemeProps({ props: inProps, name: "KylinUIButton" });

  // TODO
  const {
    className: classNameContext,
    color: colorContext,
    disabled: disabledContext,
    disableElevation: disableElevationContext,
    disableFocusRipple: disableFocusRippleContext,
    disableRipple: disableRippleContext,
    fullWidth: fullWidthContext,
    size: sizeContext,
    variant: variantContext,
    // } = React.useContext(ButtonGroupContext);
  } = {} as any;

  const {
    children,
    className,
    variant: variantProp,
    color: colorProp,
    component = "button",
    disabled: disabledProp,
    disableElevation: disableElevationProp,
    disableFocusRipple: disableFocusRippleProp,
    disableRipple: disableRippleProp,
    startIcon: startIconProp,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth: fullWidthProp,
    size: sizeProp,
    type,
    ...other
  } = props;

  const color = colorProp || colorContext || "primary";
  // TODO v6: Use nullish coalescing (??) instead of OR operator for these boolean props so that these boolean props for Button with ButtonGroup context take priority. See conversation from https://github.com/mui-org/material-ui/pull/28645#discussion_r738380902.
  const disabled = disabledProp || disabledContext || false;
  const disableElevation =
    disableElevationProp || disableElevationContext || false;
  const disableFocusRipple =
    disableFocusRippleProp || disableFocusRippleContext || false;
  const fullWidth = fullWidthProp || fullWidthContext || false;
  const size = sizeProp || sizeContext || "medium";
  const variant = variantProp || variantContext || "contained";
  const disableRipple = disableRippleProp || disableRippleContext || false;

  const ownerState = {
    ...props,
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant,
  };

  const classes = useUtilityClasses(ownerState);

  const startIcon = startIconProp && (
    <ButtonStartIcon className={classes.startIcon} ownerState={ownerState}>
      {startIconProp}
    </ButtonStartIcon>
  );

  const endIcon = endIconProp && (
    <ButtonEndIcon className={classes.endIcon} ownerState={ownerState}>
      {endIconProp}
    </ButtonEndIcon>
  );

  return (
    <StyledButton
      ownerState={ownerState}
      className={clsx(className, classNameContext)}
      component={component}
      disabled={disabled}
      disableRipple={disableRipple}
      focusRipple={!disableFocusRipple}
      focusVisibleClassName={clsx(classes.focusVisible, focusVisibleClassName)}
      ref={ref}
      type={type}
      {...other}
      classes={classes}
    >
      {startIcon}
      {children}
      {endIcon}
    </StyledButton>
  );
});
