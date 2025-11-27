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

    // globalTypes: {
    //     stylesheets: {
    //         themes: [
    //             {
    //                 id: "default-theme",
    //                 title: "Whitelabel",
    //                 url: "./build/ui/default/css/index.css",
    //             },
    //             {
    //                 id: "theme1-theme",
    //                 title: "Theme1",
    //                 url: "./build/ui/theme1/css/index.css",
    //             }
    //         ],
    //     },
    // },

    tags: ['autodocs']
};

export default preview;
