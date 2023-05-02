export default {
    title: 'Components/Buttons & Links/Button Group/Links',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        centeredButtons: {
            control: 'boolean',
        },
    },
}

export const Links = (args) => `
<div class="button-group ${
    args.centeredButtons === true ? 'button-group--centered' : ''
}">
    <a
        href="#"
        class="button button--text button--primary"
    >
        Primary
    </a>
    <a
        href="#"
        class="button button--text button--secondary"
    >
        Secondary
    </a>
    <a
        href="#"
        class="button button--text"
    >
        Default
    </a>
</div>
`
