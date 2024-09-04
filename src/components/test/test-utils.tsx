import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

export const SearchProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: SearchProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
