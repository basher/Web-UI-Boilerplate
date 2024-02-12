export const ButtonsHtml = (args) => `
<div class="button-group ${
    args.centered === true ? 'button-group--centered' : ''
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
`;


export const LinksHtml = (args) => `
<div class="button-group ${
    args.centered === true ? 'button-group--centered' : ''
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
`;
