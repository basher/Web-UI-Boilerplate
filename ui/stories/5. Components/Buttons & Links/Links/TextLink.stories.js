export default {
    title: 'Components/Buttons & Links/Links/TextLink',
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
    },
}

export const StyledLink = (args) => `
<a
    href="#"
    class="button button--text button--${args.buttonType} button--${args.buttonSize}"
>
    ${args.label}
</a>
`
StyledLink.args = {
    label: 'Styled link',
}
StyledLink.storyName = 'Text link styled like button'
