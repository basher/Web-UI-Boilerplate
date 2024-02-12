export const LinkHtml = (args) => `
<a
    href="#"
    class="button button--text button--${args.linkType} button--${args.linkSize}"
>
    ${args.label}
</a>
`;

export const IconLinkHtml = (args) => `
<a
    href="#"
    class="button button--icon"
>
    <svg
        aria-hidden="true"
        focusable="false"
        class="icon icon--${args.iconSize}"
    >
        <use href="sprite.svg#${args.iconRef}" />
    </svg>
    <span class="sr-only">[screenreader label]</span>
</a>
`;

export const TextIconLinkHtml = (args) => `
<a
    href="#"
    class="
        button button--text-icon
        button--${args.linkType}
        button--${args.linkSize}
        ${args.swapIconPosition === true ? 'button--reverse' : ''}
    "
>
    <svg
        aria-hidden="true"
        focusable="false"
        class="icon"
    >
        <use href="sprite.svg#${args.iconRef}" />
    </svg>
    <span>${args.label}</span>
</a>
`;
