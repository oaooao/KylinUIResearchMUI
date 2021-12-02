import { Breakpoints, Spacing } from "@mui/system";
import { MixinsOptions, Mixins } from "./types/mixins";

export default function createMixins(
  breakpoints: Breakpoints,
  spacing: Spacing,
  mixins: MixinsOptions
): Mixins {
  return {
    toolbar: {
      minHeight: 56,
      [`${breakpoints.up("xs")} and (orientation: landscape)`]: {
        minHeight: 48,
      },
      [breakpoints.up("sm")]: {
        minHeight: 64,
      },
    },
    ...mixins,
  };
}