module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  refs: {
    // react: {
    //   title: "React",
    //   url: 'http://localhost:7007'
    // },
    angular: {
      title: "Vue",
      url: 'http://localhost:7007'
    }
  }
}