import path from "path";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },

  webpackFinal: async (config, { configType }) => {
    const newConfig = { ...config };
    newConfig.resolve.alias = {
      ...newConfig.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };

    console.log(newConfig);

    return newConfig;
  },
};
export default config;
