export const ButtonsHtml = (args) => /*html*/ `
<div
    class="button-group flex"
    data-align="center"
    ${args.centered ? 'data-justify="center"' : ''}
>
    <button
        type="button"
        class="button"
        data-variant="text"
    >
        Cancel
    </button>
    <button
        type="button"
        class="button"
        data-variant="text"
        data-style="positive"
    >
        Yes please
    </button>
    <button
        type="button"
        class="button"
        data-variant="text"
        data-style="negative"
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
        class="button"
        data-variant="text"
        data-style="primary"
    >
        Primary
    </a>
    <a
        href="#"
        class="button"
        data-variant="text"
        data-style="secondary"
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
