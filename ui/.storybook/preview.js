/** @type { import('@storybook/html').Preview } */
const preview = {
    parameters: {
        options: {
            storySort: {
                order: ['Web UI Storybook', 'Design System', 'Layout','Forms', 'Components', 'Web Components Or Custom Elements', 'Utilities', 'Pages'],
            },
        },
    },
};

export default preview;
