/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default {
    title: 'Components/Buttons & Links/Buttons/Text',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        label: { control: 'text' },
        buttonType: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'positive', 'negative'],
            },
        },
        buttonSize: {
            control: {
                type: 'select',
                options: ['small'],
            },
        },
        disabled: { control: 'boolean' },
    },
};

export const TextButton = (args) => `
<button
    type="button"
    class="button button--text button--${args.buttonType} button--${
    args.buttonSize
}"
    ${args.disabled === true ? 'disabled' : ''}
>
    ${args.label}
</button>
`;
TextButton.args = {
    label: 'Text button',
};
TextButton.storyName = 'Text';
