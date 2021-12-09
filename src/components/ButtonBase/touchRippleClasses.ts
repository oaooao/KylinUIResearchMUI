// import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

import generateUtilityClass from "../utils/generateUtilityClass";
import generateUtilityClasses from "../utils/generateUtilityClasses";

export interface TouchRippleClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the internal `Ripple` components `ripple` class. */
  ripple: string;
  /** Styles applied to the internal `Ripple` components `rippleVisible` class. */
  rippleVisible: string;
  /** Styles applied to the internal `Ripple` components `ripplePulsate` class. */
  ripplePulsate: string;
  /** Styles applied to the internal `Ripple` components `child` class. */
  child: string;
  /** Styles applied to the internal `Ripple` components `childLeaving` class. */
  childLeaving: string;
  /** Styles applied to the internal `Ripple` components `childPulsate` class. */
  childPulsate: string;
}

export type TouchRippleClassKey = keyof TouchRippleClasses;

export function getTouchRippleUtilityClass(slot: string): string {
  return generateUtilityClass("KylinUITouchRipple", slot);
}

const touchRippleClasses: TouchRippleClasses = generateUtilityClasses(
  "KylinUITouchRipple",
  [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]
);

export default touchRippleClasses;
