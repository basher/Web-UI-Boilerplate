/* Github Flavoured Markdown */
import remarkGfm from 'remark-gfm';

/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)'
    ],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-a11y',
        {
            name: '@storybook/addon-docs',
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm],
                    },
                },
            },
        },
        {
            name: '@storybook/addon-essentials',
            options: {
                actions: false,
                backgrounds: false,
            }
        },
        '@etchteam/storybook-addon-status',
        'storybook-theme-switch-addon'
    ],

    framework: {
        name: '@storybook/html-vite',
        options: {},
    }
};
export default config;
