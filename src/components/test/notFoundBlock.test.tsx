import React from "react";
import { render } from "../test/test-utils";
import { NotFoundBlock } from "../NotFoundBlock";
import { screen } from "@testing-library/react";

test("displaying the nothing found header", () => {
  render(<NotFoundBlock />);
  const h1Tag = screen.getByTestId("h1-tag");
  expect(h1Tag).toBeInTheDocument();
  expect(h1Tag).toHaveTextContent("Nothing found");
});
