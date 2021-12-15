import React from "react";
import PropTypes from "prop-types";
import { GlobalStyles as SystemGlobalStyles } from "@mui/system";
import defaultTheme from "./styles/defaultTheme";
import { GlobalStylesProps as StyledGlobalStylesProps } from "@mui/system";
import { Theme } from "./styles/types/theme";
import { Interpolation } from "@emotion/react";

interface GlobalStylesPropsBase<Theme = {}> {
  defaultTheme?: object;
  styles: Interpolation<Theme>;
}

export interface GlobalStylesProps {
  /**
   * The styles you want to apply globally.
   */
  styles: GlobalStylesPropsBase<Theme>["styles"];
}

export function GlobalStyles(props: GlobalStylesProps) {
  // @ts-ignore
  return <SystemGlobalStyles {...props} defaultTheme={defaultTheme} />;
}
