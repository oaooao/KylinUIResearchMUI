import React from "react";
import { SxProps } from "@mui/system";
import { Theme } from "../styles/types/theme";

export interface ButtonProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  className?: string;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "error" | "warning" | "success" | "info";
  component?: React.ElementType;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  focusVisibleClassName?: string;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  type?: "button" | "reset" | "submit";
  sx?: SxProps<Theme>;
}
