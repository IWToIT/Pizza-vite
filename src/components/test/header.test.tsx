import React from "react";
import { render } from "./test-utils";
import { Header } from "../Header";
import { screen } from "@testing-library/react";

test("rendering header with logo, title and search bar", () => {
  const mockUseSelector = jest.fn();
  jest.mock("react-redux", () => ({
    useSelector: mockUseSelector,
  }));
  const mockUseLocation = jest.fn();
  jest.mock("react-router-dom", () => ({
    useLocation: mockUseLocation,
  }));
  render(<Header />);
  expect(screen.getByAltText("Pizza logo")).toBeInTheDocument();
  expect(screen.getByText("React Pizza V2")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Поиск пиццы...")).toBeInTheDocument();
  expect(screen.getByTestId("header-element")).toBeInTheDocument();
  expect(screen.getByTestId("header-element")).toMatchSnapshot();
  expect(mockUseLocation).toHaveBeenCalled();
  expect(mockUseSelector).toHaveBeenCalled();
});
