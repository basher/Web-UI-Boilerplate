import { ColorSchemeToggleSelectHtml, ColorSchemeToggleRadioHtml } from './ColorSchemeToggle';
export default {
    title: 'Components/Color Scheme Toggle',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['components'],
};

export const ColorSchemeToggleSelect = {
    render: () => ColorSchemeToggleSelectHtml(),
};
ColorSchemeToggleSelect.storyName = 'Using <select>';

export const ColorSchemeToggleRadio = {
    render: () => ColorSchemeToggleRadioHtml(),
};
ColorSchemeToggleRadio.storyName = 'Using <input type="radio">';
