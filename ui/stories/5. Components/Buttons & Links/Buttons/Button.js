export const ButtonHtml = (args) => /*html*/ `
<button
    type="button"
    class="button"
    data-variant="text"
    ${args.buttonSize ? `data-size="${args.buttonSize}"` : ''}
    ${args.buttonStyle ? `data-style="${args.buttonStyle}"` : ''}
    ${args.disabled ? 'disabled' : ''}
>
    ${args.label}
</button>
`;

export const IconButtonHtml = (args) => /*html*/ `
<button
    type="button"
    class="button"
    data-variant="icon"
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
    data-variant="text-icon${args.swapIconPosition ? '-reverse' : ''}"
    ${args.buttonSize ? `data-size="${args.buttonSize}"` : ''}
    ${args.buttonStyle ? `data-style="${args.buttonStyle}"` : ''}
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
