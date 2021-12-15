import React, { useState } from "react";
import {
  Button,
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "../components/index";
import styled from "../components/styles/styled";
import { Demo01 } from "./demo01";
// import Select from "../components/Select/Select";
import { GlobalStyles } from "../components/GlobalStyles";
import Select, { Option } from "rc-select";

// const { Option } = Select;

export const Demo04 = () => {
  const [value, setValue] = useState(undefined);

  const handleChange = (v: any) => {
    setValue(v);
  };

  return (
    <StyledEngineProvider>
      <GlobalStyles
        styles={(theme) => {
          return `
.ant-select-single .ant-select-selector {
  display: flex;
}
.ant-select-single .ant-select-selector .ant-select-selection-search {
  position: absolute;
  top: 0;
  right: 11px;
  bottom: 0;
  left: 11px;
}
.ant-select-single .ant-select-selector .ant-select-selection-search-input {
  width: 100%;
}
.ant-select-single .ant-select-selector .ant-select-selection-item,
.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
  padding: 0;
  line-height: 30px;
  transition: all 0.3s;
}
@supports (-moz-appearance: meterbar) {
  .ant-select-single .ant-select-selector .ant-select-selection-item,
  .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 30px;
  }
}
.ant-select-single .ant-select-selector .ant-select-selection-item {
  position: relative;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
  transition: none;
  pointer-events: none;
}
.ant-select-single .ant-select-selector::after,
.ant-select-single .ant-select-selector .ant-select-selection-item::after,
.ant-select-single .ant-select-selector .ant-select-selection-placeholder::after {
  display: inline-block;
  width: 0;
  visibility: hidden;
  content: '\\a0';
}
.ant-select-single.ant-select-show-arrow .ant-select-selection-search {
  right: 25px;
}
.ant-select-single.ant-select-show-arrow .ant-select-selection-item,
.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
  padding-right: 18px;
}
.ant-select-single.ant-select-open .ant-select-selection-item {
  color: #bfbfbf;
}
.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
  // width: 100%;
  height: 32px;
  padding: 0 11px;
}
.ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
  height: 30px;
}
.ant-select-single:not(.ant-select-customize-input) .ant-select-selector::after {
  line-height: 30px;
}
.ant-select-single.ant-select-customize-input .ant-select-selector::after {
  display: none;
}
.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-search {
  position: static;
  width: 100%;
}
.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-placeholder {
  position: absolute;
  right: 0;
  left: 0;
  padding: 0 11px;
}
.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-placeholder::after {
  display: none;
}
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector {
  height: 40px;
}
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector::after,
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item,
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-placeholder {
  line-height: 38px;
}
.ant-select-single.ant-select-lg:not(.ant-select-customize-input):not(.ant-select-customize-input) .ant-select-selection-search-input {
  height: 38px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector {
  height: 24px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector::after,
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item,
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-placeholder {
  line-height: 22px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input):not(.ant-select-customize-input) .ant-select-selection-search-input {
  height: 22px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selection-search {
  right: 7px;
  left: 7px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector {
  padding: 0 7px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-search {
  right: 28px;
}
.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-item,
.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-placeholder {
  padding-right: 21px;
}
.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector {
  padding: 0 11px;
}
/**
 * Do not merge \`height\` & \`line-height\` under style with \`selection\` & \`search\`,
 * since chrome may update to redesign with its align logic.
 */
.ant-select-selection-overflow {
  position: relative;
  display: flex;
  flex: auto;
  flex-wrap: wrap;
  max-width: 100%;
}
.ant-select-selection-overflow-item {
  flex: none;
  align-self: center;
  max-width: 100%;
}
.ant-select-multiple .ant-select-selector {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1px 4px;
}
.ant-select-show-search.ant-select-multiple .ant-select-selector {
  cursor: text;
}
.ant-select-disabled.ant-select-multiple .ant-select-selector {
  background: #f5f5f5;
  cursor: not-allowed;
}
.ant-select-multiple .ant-select-selector::after {
  display: inline-block;
  width: 0;
  margin: 2px 0;
  line-height: 24px;
  content: '\\a0';
}
.ant-select-multiple.ant-select-show-arrow .ant-select-selector,
.ant-select-multiple.ant-select-allow-clear .ant-select-selector {
  padding-right: 24px;
}
.ant-select-multiple .ant-select-selection-item {
  position: relative;
  display: flex;
  flex: none;
  box-sizing: border-box;
  max-width: 100%;
  height: 24px;
  margin-top: 2px;
  margin-bottom: 2px;
  line-height: 22px;
  background: #f5f5f5;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  cursor: default;
  transition: font-size 0.3s, line-height 0.3s, height 0.3s;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-margin-end: 4px;
          margin-inline-end: 4px;
  -webkit-padding-start: 8px;
          padding-inline-start: 8px;
  -webkit-padding-end: 4px;
          padding-inline-end: 4px;
}
.ant-select-disabled.ant-select-multiple .ant-select-selection-item {
  color: #bfbfbf;
  border-color: #d9d9d9;
  cursor: not-allowed;
}
.ant-select-multiple .ant-select-selection-item-content {
  display: inline-block;
  margin-right: 4px;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
}
.ant-select-multiple .ant-select-selection-item-remove {
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  color: rgba(0, 0, 0, 0.45);
  font-weight: bold;
  font-size: 10px;
  line-height: inherit;
  cursor: pointer;
}
.ant-select-multiple .ant-select-selection-item-remove > * {
  line-height: 1;
}
.ant-select-multiple .ant-select-selection-item-remove svg {
  display: inline-block;
}
.ant-select-multiple .ant-select-selection-item-remove::before {
  display: none;
}
.ant-select-multiple .ant-select-selection-item-remove .ant-select-multiple .ant-select-selection-item-remove-icon {
  display: block;
}
.ant-select-multiple .ant-select-selection-item-remove > .anticon {
  vertical-align: -0.2em;
}
.ant-select-multiple .ant-select-selection-item-remove:hover {
  color: rgba(0, 0, 0, 0.75);
}
.ant-select-multiple .ant-select-selection-overflow-item + .ant-select-selection-overflow-item .ant-select-selection-search {
  -webkit-margin-start: 0;
          margin-inline-start: 0;
}
.ant-select-multiple .ant-select-selection-search {
  position: relative;
  max-width: 100%;
  margin-top: 2px;
  margin-bottom: 2px;
  -webkit-margin-start: 7px;
          margin-inline-start: 7px;
}
.ant-select-multiple .ant-select-selection-search-input,
.ant-select-multiple .ant-select-selection-search-mirror {
  height: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  line-height: 24px;
  transition: all 0.3s;
}
.ant-select-multiple .ant-select-selection-search-input {
  width: 100%;
  min-width: 4.1px;
}
.ant-select-multiple .ant-select-selection-search-mirror {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  white-space: pre;
  visibility: hidden;
}
.ant-select-multiple .ant-select-selection-placeholder {
  position: absolute;
  top: 50%;
  right: 11px;
  left: 11px;
  transform: translateY(-50%);
  transition: all 0.3s;
}
.ant-select-multiple.ant-select-lg .ant-select-selector::after {
  line-height: 32px;
}
.ant-select-multiple.ant-select-lg .ant-select-selection-item {
  height: 32px;
  line-height: 30px;
}
.ant-select-multiple.ant-select-lg .ant-select-selection-search {
  height: 32px;
  line-height: 32px;
}
.ant-select-multiple.ant-select-lg .ant-select-selection-search-input,
.ant-select-multiple.ant-select-lg .ant-select-selection-search-mirror {
  height: 32px;
  line-height: 30px;
}
.ant-select-multiple.ant-select-sm .ant-select-selector::after {
  line-height: 16px;
}
.ant-select-multiple.ant-select-sm .ant-select-selection-item {
  height: 16px;
  line-height: 14px;
}
.ant-select-multiple.ant-select-sm .ant-select-selection-search {
  height: 16px;
  line-height: 16px;
}
.ant-select-multiple.ant-select-sm .ant-select-selection-search-input,
.ant-select-multiple.ant-select-sm .ant-select-selection-search-mirror {
  height: 16px;
  line-height: 14px;
}
.ant-select-multiple.ant-select-sm .ant-select-selection-placeholder {
  left: 7px;
}
.ant-select-multiple.ant-select-sm .ant-select-selection-search {
  -webkit-margin-start: 3px;
          margin-inline-start: 3px;
}
.ant-select-multiple.ant-select-lg .ant-select-selection-item {
  height: 32px;
  line-height: 32px;
}
.ant-select-disabled .ant-select-selection-item-remove {
  display: none;
}
/* Reset search input style */
.ant-select {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  position: relative;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector input {
  cursor: pointer;
}
.ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  cursor: text;
}
.ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector input {
  cursor: auto;
}
.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
  border-color: ${theme.palette.primary.main};
  // box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  box-shadow: none;
  border-right-width: 1px !important;
  outline: 0;
}
.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  color: rgba(0, 0, 0, 0.25);
  background: #f5f5f5;
  cursor: not-allowed;
}
.ant-select-multiple.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  background: #f5f5f5;
}
.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector input {
  cursor: not-allowed;
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input::-webkit-search-cancel-button {
  display: none;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
}
.ant-select:not(.ant-select-disabled):hover .ant-select-selector {
  // border-color: #40a9ff;
  border-color: ${theme.palette.primary.main};
  border-right-width: 1px !important;
}
.ant-select-selection-item {
  flex: 1;
  overflow: hidden;
  font-weight: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@media all and (-ms-high-contrast: none) {
  .ant-select-selection-item *::-ms-backdrop,
  .ant-select-selection-item {
    flex: auto;
  }
}
.ant-select-selection-placeholder {
  flex: 1;
  overflow: hidden;
  color: #bfbfbf;
  white-space: nowrap;
  text-overflow: ellipsis;
  pointer-events: none;
}
@media all and (-ms-high-contrast: none) {
  .ant-select-selection-placeholder *::-ms-backdrop,
  .ant-select-selection-placeholder {
    flex: auto;
  }
}
.ant-select-arrow {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 50%;
  right: 11px;
  width: 12px;
  height: 12px;
  margin-top: -6px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  line-height: 1;
  text-align: center;
  pointer-events: none;
}
.ant-select-arrow > * {
  line-height: 1;
}
.ant-select-arrow svg {
  display: inline-block;
}
.ant-select-arrow::before {
  display: none;
}
.ant-select-arrow .ant-select-arrow-icon {
  display: block;
}
.ant-select-arrow .anticon {
  vertical-align: top;
  transition: transform 0.3s;
}
.ant-select-arrow .anticon > svg {
  vertical-align: top;
}
.ant-select-arrow .anticon:not(.ant-select-suffix) {
  pointer-events: auto;
}
.ant-select-disabled .ant-select-arrow {
  cursor: not-allowed;
}
.ant-select-clear {
  position: absolute;
  top: 50%;
  right: 11px;
  z-index: 1;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-top: -6px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  font-style: normal;
  line-height: 1;
  text-align: center;
  text-transform: none;
  background: #fff;
  cursor: pointer;
  opacity: 0;
  transition: color 0.3s ease, opacity 0.15s ease;
  text-rendering: auto;
}
.ant-select-clear::before {
  display: block;
}
.ant-select-clear:hover {
  color: rgba(0, 0, 0, 0.45);
}
.ant-select:hover .ant-select-clear {
  opacity: 1;
}
.ant-select-dropdown {
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  position: absolute;
  top: -9999px;
  left: -9999px;
  z-index: 1050;
  box-sizing: border-box;
  // padding: 4px 0;
  overflow: hidden;
  font-size: 14px;
  font-variant: initial;
  background-color: #fff;
  border-radius: 2px;
  outline: none;
  box-shadow: 0 3px 6px -4px rgba(104, 59, 59, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  // box-shadow: none;
}
.ant-select-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-select-dropdown-placement-bottomLeft,
.ant-select-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-select-dropdown-placement-bottomLeft {
  -webkit-animation-name: antSlideUpIn;
          animation-name: antSlideUpIn;
}
.ant-select-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-select-dropdown-placement-topLeft,
.ant-select-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-select-dropdown-placement-topLeft {
  -webkit-animation-name: antSlideDownIn;
          animation-name: antSlideDownIn;
}
.ant-select-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-select-dropdown-placement-bottomLeft {
  -webkit-animation-name: antSlideUpOut;
          animation-name: antSlideUpOut;
}
.ant-select-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-select-dropdown-placement-topLeft {
  -webkit-animation-name: antSlideDownOut;
          animation-name: antSlideDownOut;
}
.ant-select-dropdown-hidden {
  display: none;
}
.ant-select-dropdown-empty {
  color: rgba(0, 0, 0, 0.25);
}
.ant-select-item-empty {
  position: relative;
  display: block;
  min-height: 28px;
  padding: 0 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.25);
}
.ant-select-item {
  position: relative;
  display: block;
  min-height: 28px;
  padding: 0 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.ant-select-item-group {
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
  cursor: default;
}
.ant-select-item-option {
  display: flex;
  align-items: center;
}
.ant-select-item-option-content {
  flex: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ant-select-item-option-state {
  flex: none;
}
.ant-select-item-option-active:not(.ant-select-item-option-disabled) {
  // background-color: #f5f5f5;
  background-color: ${theme.palette.primary.light};
}
.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
  // color: rgba(0, 0, 0, 0.85);
  color: #F7F8FA;
  font-weight: 600;
  // background-color: #e6f7ff;
  background-color: ${theme.palette.blue[300]};
}
.ant-select-item-option-selected:not(.ant-select-item-option-disabled) .ant-select-item-option-state {
  color: #1890ff;
}
.ant-select-item-option-disabled {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-select-item-option-disabled.ant-select-item-option-selected {
  background-color: #f5f5f5;
}
.ant-select-item-option-grouped {
  padding-left: 24px;
}
.ant-select-lg {
  font-size: 16px;
}
.ant-select-borderless .ant-select-selector {
  background-color: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
.ant-select-rtl {
  direction: rtl;
}
.ant-select-rtl .ant-select-arrow {
  right: initial;
  left: 11px;
}
.ant-select-rtl .ant-select-clear {
  right: initial;
  left: 11px;
}
.ant-select-dropdown-rtl {
  direction: rtl;
}
.ant-select-dropdown-rtl .ant-select-item-option-grouped {
  padding-right: 24px;
  padding-left: 12px;
}
.ant-select-rtl.ant-select-multiple.ant-select-show-arrow .ant-select-selector,
.ant-select-rtl.ant-select-multiple.ant-select-allow-clear .ant-select-selector {
  padding-right: 4px;
  padding-left: 24px;
}
.ant-select-rtl.ant-select-multiple .ant-select-selection-item {
  text-align: right;
}
.ant-select-rtl.ant-select-multiple .ant-select-selection-item-content {
  margin-right: 0;
  margin-left: 4px;
  text-align: right;
}
.ant-select-rtl.ant-select-multiple .ant-select-selection-search-mirror {
  right: 0;
  left: auto;
}
.ant-select-rtl.ant-select-multiple .ant-select-selection-placeholder {
  right: 11px;
  left: auto;
}
.ant-select-rtl.ant-select-multiple.ant-select-sm .ant-select-selection-placeholder {
  right: 7px;
}
.ant-select-rtl.ant-select-single .ant-select-selector .ant-select-selection-item,
.ant-select-rtl.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
  right: 0;
  left: 9px;
  text-align: right;
}
.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-search {
  right: 11px;
  left: 25px;
}
.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-item,
.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
  padding-right: 0;
  padding-left: 18px;
}
.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-search {
  right: 6px;
}
.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-item,
.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-placeholder {
  padding-right: 0;
  padding-left: 21px;
}
          `;
        }}
      />
      <Select
        // open={true}
        // className="rc-select"
        value={value}
        prefixCls="ant-select"
        // animation="slide-up"
        // transitionName="rc-select-selection__choice-zoom"
        dropdownMatchSelectWidth
        style={{ width: 200, margin: 20 }}
        // multiple={true}
        // allowClear
        // optionFilterProp="children"
        // optionLabelProp="children"
        // onSelect={this.onSelect}
        // onDeselect={this.onDeselect}
        placeholder="please select"
        onChange={handleChange}
        // onFocus={() => console.log("focus")}
      >
        <Option value="jack">jack</Option>
        <Option value="lucy">lucy</Option>
        <Option value="yiminghe">yiminghe</Option>
      </Select>
    </StyledEngineProvider>
  );
};
