import React from "react";
import { CartEmpty } from "../CartEmpty";
import { screen } from "@testing-library/react";
import { render } from "./test-utils";

test("is the alt text of the image displayed", () => {
  render(<CartEmpty />);
  const image = screen.getByAltText("Empty cart");
  expect(image).toBeInTheDocument();
});
