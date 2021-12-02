import { createStyled, shouldForwardProp } from "@mui/system";
import defaultTheme from "./defaultTheme";
import { Theme } from "./types/theme";

export const rootShouldForwardProp = (prop: PropertyKey) =>
  shouldForwardProp(prop) && prop !== "classes";

export const slotShouldForwardProp = shouldForwardProp;

const styled = createStyled<Theme>({
  defaultTheme,
  rootShouldForwardProp,
});

export default styled;
