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

    // 'theme' globalType will be accessible in the decorator as 'context.globals.theme'.
    globalTypes: {
        theme: {
            description: 'Theme',
            toolbar: {
                title: 'Theme',
                icon: 'paintbrush',
                items: [
                    {
                        value: 'default',
                        title: 'Whitelabel',
                    },
                    {
                        value: 'theme1',
                        title: 'Theme1',
                    },
                ],
                dynamicTitle: true,
            },
        },
    },

    initialGlobals: {
        theme: 'default',
    },

    decorators: [
        (Story, context) => {
            const stylesheet = `/build/ui/${context.globals.theme}/css/index.css`;

            return `
                <link rel="stylesheet" href=${stylesheet} />
                ${Story()}
            `;
        },
    ]
};

export default preview;
