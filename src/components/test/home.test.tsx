import React from "react";
import { Home } from "@/pages/Home";
import { render } from "./test-utils";
import { screen } from "@testing-library/react";

test("should render the component without crashing", () => {
  render(<Home />);
  expect(screen.getByTestId("content-element")).toBeInTheDocument();
  expect(screen.getByTestId("content-element")).toMatchSnapshot();
});
