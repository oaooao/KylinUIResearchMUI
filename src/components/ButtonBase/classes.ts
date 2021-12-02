import generateUtilityClass from "../utils/generateUtilityClass";
import generateUtilityClasses from "../utils/generateUtilityClasses";

export interface ButtonBaseClasses {
  /** Styles applied to the root element. */
  root: string;
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string;
  /** State class applied to the root element if keyboard focused. */
  focusVisible: string;
}

export type ButtonBaseClassKey = keyof ButtonBaseClasses;

export function getButtonBaseUtilityClass(slot: string): string {
  return generateUtilityClass("KylinUIButtonBase", slot);
}

const buttonBaseClasses: ButtonBaseClasses = generateUtilityClasses(
  "KylinUIButtonBase",
  ["root", "disabled", "focusVisible"]
);

export default buttonBaseClasses;
