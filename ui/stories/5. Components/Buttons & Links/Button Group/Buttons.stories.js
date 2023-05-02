export default {
    title: 'Components/Buttons & Links/Button Group/Buttons',
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

export const Buttons = (args) => `
<div class="button-group ${
    args.centeredButtons === true ? 'button-group--centered' : ''
}">
    <button
        type="button"
        class="button button--text"
    >
        Cancel
    </button>
    <button
        type="button"
        class="button button--text button--positive"
    >
        Yes please
    </button>
    <button
        type="button"
        class="button button--text button--negative"
    >
        No thanks
    </button>
</div>
`
