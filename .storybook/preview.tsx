import React from "react";
import { Preview } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import "../src/scss/app.scss";

const preview: Preview = {
  parameters: {},
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default preview;
