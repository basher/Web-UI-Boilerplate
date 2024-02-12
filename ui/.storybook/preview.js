/** @type { import('@storybook/html').Preview } */
const preview = {
    parameters: {
        options: {
            storySort: {
                order: ['Web UI Storybook', 'Design System', 'Layout','Forms', 'Components', 'Utilities', 'Pages'],
            },
        },
    },
};

export default preview;
