import { useThemeProps as systemUseThemeProps } from "@mui/system";
import defaultTheme from "./defaultTheme";
import { Components } from "./types/components";

export interface ThemeWithProps {
  components?: Components;
}

export type ThemedProps<Theme, Name extends keyof any> = Theme extends {
  components: Record<Name, { defaultProps: infer Props }>;
}
  ? Props
  : {};

export default function useThemeProps<
  Theme extends ThemeWithProps,
  Props,
  Name extends keyof any
>({
  props,
  name,
}: {
  props: Props;
  name: Name;
}): Props & ThemedProps<Theme, Name> {
  return systemUseThemeProps({ props, name, defaultTheme }) as any;
}
