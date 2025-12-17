export const ButtonHtml = (args) => /*html*/ `
<button
    type="button"
    class="button"
    data-button="text"
    ${args.buttonSize ? `data-button-size="${args.buttonSize}"` : ''}
    ${args.buttonStyle ? `data-button-style="${args.buttonStyle}"` : ''}
    ${args.disabled ? 'disabled' : ''}
>
    ${args.label}
</button>
`;

export const IconButtonHtml = (args) => /*html*/ `
<button
    type="button"
    class="button"
    data-button="icon"
    ${args.disabled === true ? 'disabled' : ''}
>
    <svg
        aria-hidden="true"
        focusable="false"
        class="icon"
        ${args.iconSize ? `data-icon-size="${args.iconSize}"` : ''}
    >
        <use href="sprite.svg#${args.iconRef}" />
    </svg>
    <span class="visually-hidden">[screenreader label]</span>
</button>
`;

export const TextIconButtonHtml = (args) => /*html*/ `
<button
    type="button"
    class="button"
    data-button="text-icon${args.swapIconPosition ? '-reverse' : ''}"
    ${args.buttonSize ? `data-button-size="${args.buttonSize}"` : ''}
    ${args.buttonStyle ? `data-button-style="${args.buttonStyle}"` : ''}
    ${args.disabled ? 'disabled' : ''}
>
    <svg
        aria-hidden="true"
        focusable="false"
        class="icon"
    >
        <use href="sprite.svg#${args.iconRef}" />
    </svg>
    <span>${args.label}</span>
</button>
`;
