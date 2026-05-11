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

export const WebUIColorSchemeToggle = {
    render: () => /*html*/ `
        <p>
            See the
            <code>&lt;webui-color-scheme-toggle&gt;</code>
            Web Component.
        </p>
    `
};
WebUIColorSchemeToggle.storyName = '<webui-color-scheme-toggle>';
