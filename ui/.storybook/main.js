/* Github Flavoured Markdown */
import remarkGfm from 'remark-gfm';

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
        '@etchteam/storybook-addon-status',
        // 'storybook-theme-switch-addon'
    ],

    framework: {
        name: '@storybook/html-vite',
        options: {},
    }
};
export default config;
