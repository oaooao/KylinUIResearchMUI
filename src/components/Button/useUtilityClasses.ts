import {unstable_capitalize as capitalize} from "@mui/utils";
import composeClasses from "../utils/composeClasses";
import {getButtonUtilityClass} from "./classes";

export const useUtilityClasses = (ownerState: any) => {
    const {color, disableElevation, fullWidth, size, variant, classes} =
        ownerState;

    const slots = {
        root: [
            "root",
            variant,
            `${variant}${capitalize(color)}`,
            `size${capitalize(size)}`,
            `${variant}Size${capitalize(size)}`,
            color === "inherit" && "colorInherit",
            disableElevation && "disableElevation",
            fullWidth && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["startIcon", `iconSize${capitalize(size)}`],
        endIcon: ["endIcon", `iconSize${capitalize(size)}`],
    };

    const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);

    return {
        ...classes, // forward the focused, disabled, etc. classes to the ButtonBase
        ...composedClasses,
    };
};