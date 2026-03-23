/** @type { import('@storybook/html-vite').Preview } */
import { themes } from 'storybook/theming';
const preview = {
    parameters: {
        options: {
            storySort: {
                order: ['Web UI Storybook', 'Foundations', 'Layout','Forms', 'Components', 'Web Components Or Custom Elements', 'Utilities', 'Pages'],
            },
        },
        darkMode: {
            classTarget: 'html',
            stylePreview: true,
            current: 'WebUIBoilerplate',
            dark: { ...themes.dark },
        },
    },

    tags: ['autodocs'],

    // Theme override - globalType 'theme' is passed to decorator as 'context.globals.theme'.
    globalTypes: {
        theme: {
            description: 'Theme',
            toolbar: {
                title: 'Theme',
                icon: 'paintbrush',
                items: [
                    {
                        value: 'default',
                        title: 'Whitelabel (default)',
                    },
                    {
                        value: 'theme1',
                        title: 'Theme 1',
                    },
                ],
                dynamicTitle: true,
            },
        },
    },

    decorators: [
        (Story, context) => {
            const stylesheet = `build/ui/${context.globals.theme}/css/index.css`;

            // Only include theme CSS when running in published Storybook.
            const linkCSS = import.meta.env.MODE === 'production'
                ? `<link rel="stylesheet" href=${stylesheet} />`
                : '';

            return `${linkCSS}${Story()}`;
        },
    ]
};

export default preview;
