import React from "react";
import Categories from "../Categories/Categories";
import { render } from "./test-utils";
import { screen, within } from "@testing-library/react";

test("highlighting the active category", () => {
  const value = 2;
  const onChangeCategory = jest.fn();
  render(<Categories value={value} onChangeCategory={onChangeCategory} />);
  expect(screen.getByTestId("cat-element")).toBeInTheDocument();
  expect(screen.getByTestId("cat-element")).toMatchSnapshot();
  const categoryList = screen.getByRole("list");
  const categoryItems = within(categoryList).getAllByRole("listitem");
  expect(categoryItems[2]).toHaveClass("active");
});
