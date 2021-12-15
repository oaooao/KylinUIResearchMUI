import React from "react";
import omit from "rc-util/lib/omit";
import classNames from "classnames";
import RcSelect, {
  Option,
  OptGroup,
  SelectProps as RcSelectProps,
} from "rc-select";
import { OptionProps } from "rc-select/lib/Option";
import { Style } from "./style";

export type SizeType = "small" | "middle" | "large" | undefined;

type RawValue = string | number;

export type { OptionProps };

export type OptionType = typeof Option;

export interface LabeledValue {
  key?: string;
  value: RawValue;
  label: React.ReactNode;
}

export type SelectValue =
  | RawValue
  | RawValue[]
  | LabeledValue
  | LabeledValue[]
  | undefined;

export interface InternalSelectProps<VT>
  extends Omit<RcSelectProps<VT>, "mode"> {
  suffixIcon?: React.ReactNode;
  size?: SizeType;
  mode?: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
  bordered?: boolean;
}

const SECRET_COMBOBOX_MODE_DO_NOT_USE = "SECRET_COMBOBOX_MODE_DO_NOT_USE";

const getTransitionName = (rootPrefixCls: string, motion: string, transitionName?: string) => {
  if (transitionName !== undefined) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};

export interface SelectProps<VT>
  extends Omit<
  InternalSelectProps<VT>,
  "inputIcon" | "mode" | "getInputElement" | "getRawInputElement" | "backfill"
  > {
  mode?: "multiple" | "tags";
}

export interface RefSelectProps {
  focus: () => void;
  blur: () => void;
}

export const InternalSelect = <VT extends SelectValue = SelectValue>(
  _props: SelectProps<VT>,
  ref: React.Ref<RefSelectProps>
) => {
  const {
    prefixCls: customizePrefixCls,
    bordered = true,
    className,
    getPopupContainer,
    dropdownClassName,
    listHeight = 256,
    listItemHeight = 24,
    size: customizeSize,
    notFoundContent,
    ...props
  } = _props;

  // TODO:
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    renderEmpty,
    direction,
    virtual,
    dropdownMatchSelectWidth,
    // } = React.useContext(ConfigContext);
  } = {} as any;

  // TODO:
  const size = "middle" as const;

  // TODO:
  // const prefixCls = getPrefixCls?.("select", customizePrefixCls);
  // const rootPrefixCls = getPrefixCls?.();
  const prefixCls = 'ant-select';
  const rootPrefixCls = 'ant';

  const mode = React.useMemo(() => {
    const { mode: m } = props as InternalSelectProps<VT>;

    if ((m as any) === "combobox") {
      return undefined;
    }

    if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return "combobox";
    }

    return m;
  }, [props.mode]);

  const isMultiple = mode === "multiple" || mode === "tags";

  // ===================== Empty =====================
  let mergedNotFound: React.ReactNode;
  if (notFoundContent !== undefined) {
    mergedNotFound = notFoundContent;
  } else if (mode === "combobox") {
    mergedNotFound = null;
  } else {
    mergedNotFound = renderEmpty?.("Select");
  }

  // TODO:
  // ===================== Icons =====================
  // const { suffixIcon, itemIcon, removeIcon, clearIcon } = getIcons({
  //   ...props,
  //   multiple: isMultiple,
  //   prefixCls,
  // });

  const selectProps = omit(props as typeof props & { itemIcon: any }, [
    "suffixIcon",
    "itemIcon",
  ]);

  console.log('selectProps =', selectProps);

  const rcSelectRtlDropDownClassName = classNames(dropdownClassName, {
    [`${prefixCls}-dropdown-${direction}`]: direction === "rtl",
  });

  const mergedSize = customizeSize || size;
  const mergedClassName = classNames(
    {
      [`${prefixCls}-lg`]: mergedSize === "large",
      [`${prefixCls}-sm`]: mergedSize === "small",
      [`${prefixCls}-rtl`]: direction === "rtl",
      [`${prefixCls}-borderless`]: !bordered,
    },
    className
  );

  return (
    <>
      {/* <Style /> */}
      {/* @ts-ignore */}
      <RcSelect<any>
        showArrow
        ref={ref as any}
        virtual={virtual}
        dropdownMatchSelectWidth={dropdownMatchSelectWidth}
        {...selectProps}
        // transitionName={getTransitionName(
        //   rootPrefixCls,
        //   "slide-up",
        //   props.transitionName
        // )}
        listHeight={listHeight}
        listItemHeight={listItemHeight}
        mode={mode}
        prefixCls={prefixCls}
        direction={direction}
        // inputIcon={suffixIcon}
        // menuItemSelectedIcon={itemIcon}
        // removeIcon={removeIcon}
        // clearIcon={clearIcon}
        notFoundContent={mergedNotFound}
        className={mergedClassName}
        getPopupContainer={getPopupContainer || getContextPopupContainer}
        dropdownClassName={rcSelectRtlDropDownClassName}
      >
        {props.children}
      </RcSelect>
    </>
  );
};

const SelectRef = React.forwardRef(InternalSelect) as <
  VT extends SelectValue = SelectValue
  >(
  props: SelectProps<VT> & { ref?: React.Ref<RefSelectProps> }
) => React.ReactElement;

type InternalSelectType = typeof SelectRef;

interface SelectInterface extends InternalSelectType {
  SECRET_COMBOBOX_MODE_DO_NOT_USE: string;
  Option: typeof Option;
  OptGroup: typeof OptGroup;
}

const Select = SelectRef as SelectInterface;

Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = Option;
Select.OptGroup = OptGroup;

export default Select;
