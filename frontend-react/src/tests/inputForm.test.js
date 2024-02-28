import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputForm from "../views/auth/components/input-form";

test("renders InputForm component with correct props", () => {

  const handleChange = jest.fn();
  const { getByLabelText, getByPlaceholderText } = render(<InputForm type="text" value="Test Value" onChange={handleChange} id="testid" placeholder="Test Placeholder" conten="Test Content" />);


  const labelElement = getByLabelText("Test Content");
  const inputElement = getByPlaceholderText("Test Placeholder");


  expect(labelElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveValue("Test Value");
});
 