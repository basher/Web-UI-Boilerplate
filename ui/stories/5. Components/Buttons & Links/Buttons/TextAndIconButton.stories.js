import docs from '../IconButton.mdx'

export default {
    title: 'Components/Buttons & Links/Buttons/Text & Icon',
    parameters: {
        docs: {
            page: docs,
        },
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
        iconRef: {
            control: {
                type: 'select',
                options: ['chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'close'],
            },
        },
        swapIconPosition: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
}

export const TextAndIconButton = (args) => `
<button
    type="button"
    class="
        button button--text-icon
        button--${args.buttonType}
        button--${args.buttonSize}
        ${
            args.swapIconPosition === true ? 'button--reverse' : ''
        }
    "
    ${args.disabled === true ? 'disabled' : ''}
>
    <svg
        aria-hidden="true"
        focusable="false"
        class="icon"
    >
        <use href="/sprite.svg#${args.iconRef}" />
    </svg>
    <span>${args.label}</span>
</button>
`
TextAndIconButton.args = {
    label: 'Text & icon button',
    iconRef: 'chevron-down',
}
TextAndIconButton.storyName = 'Text & Icon'
