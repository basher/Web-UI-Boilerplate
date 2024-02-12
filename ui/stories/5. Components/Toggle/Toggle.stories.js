import { ToggleHtml, ToggleWithLabelHtml } from './Toggle';
export default {
    title: 'Components/Toggle (Or Switch)',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Toggle = {
    render: () => ToggleHtml(),
};

export const ToggleWithLabel = {
    render: () => ToggleWithLabelHtml(),
};
ToggleWithLabel.storyName = 'Toggle With Visible Label';
