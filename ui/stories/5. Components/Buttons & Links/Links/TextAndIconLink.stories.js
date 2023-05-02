import docs from '../IconButton.mdx'

export default {
    title: 'Components/Buttons & Links/Links/Text & Icon',
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
                options: ['chevron-down', 'chevron-left', 'chevron-right', 'chevron-up'],
            },
        },
        swapIconPosition: { control: 'boolean' },
    },
}

export const TextAndIconLink = (args) => `
<a
    href="#"
    class="
        button button--text-icon
        button--${args.buttonType}
        button--${args.buttonSize}
        ${
            args.swapIconPosition === true ? 'button--reverse' : ''
        }
    "
>
    <svg
        aria-hidden="true"
        focusable="false"
        class="icon"
    >
        <use href="/sprite.svg#${args.iconRef}" />
    </svg>
    <span>${args.label}</span>
</a>
`
TextAndIconLink.args = {
    label: 'Text & icon link',
    iconRef: 'chevron-down',
}
TextAndIconLink.storyName = 'Text & Icon'
