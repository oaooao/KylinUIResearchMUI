import React from "react";
import {alpha} from "@mui/system";
import {unstable_capitalize as capitalize} from "@mui/utils";
import clsx from "clsx";
import styled, {rootShouldForwardProp} from "../styles/styled";
import {ButtonBase} from "../ButtonBase/ButtonBase";
import buttonClasses from "./classes";
import {Theme} from "../styles/types/theme";
import useThemeProps from "../styles/useThemeProps";
import {useUtilityClasses} from "./useUtilityClasses";

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

const ButtonRoot = styled(ButtonBase, {
  shouldForwardProp: (prop) =>
    rootShouldForwardProp(prop) || prop === "classes",
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
})(
  ({ theme, ownerState }: { theme: Theme; ownerState: any }) => ({
    ...theme.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(
      ["background-color", "box-shadow", "border-color", "color"],
      {
        duration: theme.transitions.duration.short,
      }
    ),
    "&:hover": {
      textDecoration: "none",
      backgroundColor: alpha(
        theme.palette.text.primary,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
      ...(ownerState.variant === "text" &&
        ownerState.color !== "inherit" && {
          backgroundColor: alpha(
            (theme as any).palette[ownerState.color].main,
            theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent",
          },
        }),
      ...(ownerState.variant === "outlined" &&
        ownerState.color !== "inherit" && {
          border: `1px solid ${(theme as any).palette[ownerState.color].main}`,
          backgroundColor: alpha(
            (theme as any).palette[ownerState.color].main,
            theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent",
          },
        }),
      ...(ownerState.variant === "contained" && {
        backgroundColor: theme.palette.grey.A100,
        boxShadow: theme.shadows[4],
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          boxShadow: theme.shadows[2],
          backgroundColor: theme.palette.grey[300],
        },
      }),
      ...(ownerState.variant === "contained" &&
        ownerState.color !== "inherit" && {
          backgroundColor: (theme as any).palette[ownerState.color].dark,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: (theme as any).palette[ownerState.color].main,
          },
        }),
    },
    "&:active": {
      ...(ownerState.variant === "contained" && {
        boxShadow: theme.shadows[8],
      }),
    },
    [`&.${buttonClasses.focusVisible}`]: {
      ...(ownerState.variant === "contained" && {
        boxShadow: theme.shadows[6],
      }),
    },
    [`&.${buttonClasses.disabled}`]: {
      color: theme.palette.action.disabled,
      ...(ownerState.variant === "outlined" && {
        border: `1px solid ${theme.palette.action.disabledBackground}`,
      }),
      ...(ownerState.variant === "outlined" &&
        ownerState.color === "secondary" && {
          border: `1px solid ${theme.palette.action.disabled}`,
        }),
      ...(ownerState.variant === "contained" && {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground,
      }),
    },
    ...(ownerState.variant === "text" && {
      padding: "6px 8px",
    }),
    ...(ownerState.variant === "text" &&
      ownerState.color !== "inherit" && {
        color: (theme as any).palette[ownerState.color].main,
      }),
    ...(ownerState.variant === "outlined" && {
      padding: "5px 15px",
      border: `1px solid ${
        theme.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)"
      }`,
    }),
    ...(ownerState.variant === "outlined" &&
      ownerState.color !== "inherit" && {
        color: (theme as any).palette[ownerState.color].main,
        border: `1px solid ${alpha(
          (theme as any).palette[ownerState.color].main,
          0.5
        )}`,
      }),
    ...(ownerState.variant === "contained" && {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
    }),
    ...(ownerState.variant === "contained" &&
      ownerState.color !== "inherit" && {
        color: (theme as any).palette[ownerState.color].contrastText,
        backgroundColor: (theme as any).palette[ownerState.color].main,
      }),
    ...(ownerState.color === "inherit" && {
      color: "inherit",
      borderColor: "currentColor",
    }),
    ...(ownerState.size === "small" &&
      ownerState.variant === "text" && {
        padding: "4px 5px",
        fontSize: theme.typography.pxToRem(13),
      }),
    ...(ownerState.size === "large" &&
      ownerState.variant === "text" && {
        padding: "8px 11px",
        fontSize: theme.typography.pxToRem(15),
      }),
    ...(ownerState.size === "small" &&
      ownerState.variant === "outlined" && {
        padding: "3px 9px",
        fontSize: theme.typography.pxToRem(13),
      }),
    ...(ownerState.size === "large" &&
      ownerState.variant === "outlined" && {
        padding: "7px 21px",
        fontSize: theme.typography.pxToRem(15),
      }),
    ...(ownerState.size === "small" &&
      ownerState.variant === "contained" && {
        padding: "4px 10px",
        fontSize: theme.typography.pxToRem(13),
      }),
    ...(ownerState.size === "large" &&
      ownerState.variant === "contained" && {
        padding: "8px 22px",
        fontSize: theme.typography.pxToRem(15),
      }),
    ...(ownerState.fullWidth && {
      width: "100%",
    }),
  }),
  ({ ownerState }: any) =>
    ownerState.disableElevation && {
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

const ButtonStartIcon = styled<any>("span", {
  name: "MuiButton",
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
  name: "MuiButton",
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

export const Button = React.forwardRef<any, any>(function Button(inProps, ref) {
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
    color: colorProp,
    component = "button",
    disabled: disabledProp,
    disableElevation: disableElevationProp,
    disableFocusRipple: disableFocusRippleProp,
    disableRipple: disableRippleProp,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth: fullWidthProp,
    size: sizeProp,
    startIcon: startIconProp,
    type,
    variant: variantProp,
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
  const variant = variantProp || variantContext || "text";
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
    <ButtonRoot
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
    </ButtonRoot>
  );
});
