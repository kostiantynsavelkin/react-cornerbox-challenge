// .storybook/main.js
module.exports = {
    stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
    addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/preset-create-react-app',
    ],
    framework: '@storybook/react',
    typescript: {
      check: true,
      checkOptions: {},
    },
  };
  