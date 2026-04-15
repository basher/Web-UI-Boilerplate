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
        '@vueless/storybook-dark-mode',
        '@storybook/addon-vitest'
    ],

    framework: {
        name: '@storybook/html-vite',
        options: {},
    },

    // Load CSS/JS that Parcel has bundled, using environment variables.
    previewHead: (head) => `
        ${head}
        ${
            `
            <link href="${process.env.STORYBOOK_CSS_PATH}" rel="stylesheet" />
            <script defer type="module" src="${process.env.STORYBOOK_JS_PATH}"></script>
            `
        }
    `,
};
export default config;
