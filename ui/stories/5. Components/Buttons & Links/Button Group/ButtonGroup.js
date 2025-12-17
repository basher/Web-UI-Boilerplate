export const ButtonsHtml = (args) => /*html*/ `
<div
    class="button-group flex"
    ${args.centered ? 'data-justify="center"' : ''}
>
    <button
        type="button"
        class="button"
        data-button="text"
    >
        Cancel
    </button>
    <button
        type="button"
        class="button"
        data-button="text"
        data-button-style="positive"
    >
        Yes please
    </button>
    <button
        type="button"
        class="button"
        data-button="text"
        data-button-style="negative"
    >
        No thanks
    </button>
</div>
`;


export const LinksHtml = (args) => /*html*/ `
<div
    class="button-group flex"
    ${args.centered ? 'data-justify="center"' : ''}
>
    <a
        href="#"
        class="button"
        data-button="text"
        data-button-style="primary"
    >
        Primary
    </a>
    <a
        href="#"
        class="button"
        data-button="text"
        data-button-style="secondary"
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
