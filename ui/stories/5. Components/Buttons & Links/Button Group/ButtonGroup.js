export const ButtonsHtml = (args) => /*html*/ `
<div
    class="button-group flex"
    data-align="center"
    ${args.centered ? 'data-justify="center"' : ''}
>
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


export const LinksHtml = (args) => /*html*/ `
<div
    class="button-group flex"
    data-align="center"
    ${args.centered ? 'data-justify="center"' : ''}
>
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
    >
        Normal
    </a>
</div>
`;
