import path from "path";
module.exports = {
  typescript: {
    check: true,
    checkOptions: {},
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "storybook-addon-react-router-v6",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve("src"),
      };
    }
    return config;
  },
};
