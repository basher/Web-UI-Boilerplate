/** @type { import('@storybook/html-vite').Preview } */
const preview = {
    parameters: {
        options: {
            storySort: {
                order: ['Web UI Storybook', 'Design System', 'Layout','Forms', 'Components', 'Web Components Or Custom Elements', 'Utilities', 'Pages'],
            },
        },
    },

    globalTypes: {
        stylesheets: {
            themes: [
                {
                    id: "default-theme",
                    title: "Whitelabel",
                    url: "./build/ui/default/css/index.css",
                },
                {
                    id: "theme1-theme",
                    title: "Theme1",
                    url: "./build/ui/theme1/css/index.css",
                }
            ],
        },
    },

    tags: ['autodocs']
};

export default preview;
