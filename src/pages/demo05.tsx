import { useState } from "react";
import {
  StyledEngineProvider,
} from "../components/index";
import Select from "../components/Select/Select";
import { Style } from "../components/Select/style";

const { Option } = Select;

export const Demo05 = () => {
  const [value, setValue] = useState('jack');

  const handleChange = (v: any) => {
    console.log('123 =', 123);
    setValue(v);
  };

  return (
    <StyledEngineProvider>
      <Style />
      <Select
        showArrow
        // mode=''
        // value={value}
        // dropdownMatchSelectWidth
        style={{ width: 200, margin: 20 }}
        placeholder="please select"
      // onChange={handleChange}
      >
        <Option value="a">a</Option>
        <Option value="b">b</Option>
        <Option value="c">c</Option>
        <Option value="d">d</Option>
        <Option value="e">e</Option>
        <Option value="f">f</Option>
        <Option value="g">g</Option>
      </Select>
    </StyledEngineProvider>
  );
};
