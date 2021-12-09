import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("Button should render", () => {
    render(<Button />);
  });
});
