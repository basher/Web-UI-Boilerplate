export const ButtonHtml = (args) => `
<button
    type="button"
    class="button button--text button--${args.buttonType} button--${
        args.buttonSize
    }"
    ${args.disabled === true ? 'disabled' : ''}
>
    ${args.label}
</button>
`;

export const IconButtonHtml = (args) => `
<button
    type="button"
    class="button button--icon"
    ${args.disabled === true ? 'disabled' : ''}
>
    <svg
        aria-hidden="true"
        focusable="false"
        class="icon icon--${args.iconSize}"
    >
        <use href="sprite.svg#${args.iconRef}" />
    </svg>
    <span class="visually-hidden">[screenreader label]</span>
</button>
`;

export const TextIconButtonHtml = (args) => `
<button
    type="button"
    class="
        button button--text-icon
        button--${args.buttonType}
        button--${args.buttonSize}
        ${args.swapIconPosition === true ? 'button--reverse' : ''}
    "
    ${args.disabled === true ? 'disabled' : ''}
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
