module.exports = {
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    staticDirs: ['../public'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-a11y',
        {
            name: '@storybook/addon-essentials',
            options: {
                actions: false,
                backgrounds: false,
            }
        },
        '@etchteam/storybook-addon-status',
    ]
  }
