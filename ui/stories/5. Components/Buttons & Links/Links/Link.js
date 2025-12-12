export const LinkHtml = (args) => /*html*/ `
<a
    href="#"
    class="button"
    data-variant="text"
    ${args.linkSize ? `data-size="${args.linkSize}"` : ''}
    ${args.linkStyle ? `data-style="${args.linkStyle}"` : ''}
>
    ${args.label}
</a>
`;

export const IconLinkHtml = (args) => /*html*/ `
<a
    href="#"
    class="button"
    data-variant="icon"
>
    <svg
        aria-hidden="true"
        focusable="false"
        class="icon"
        ${args.iconSize ? `data-size="${args.iconSize}"` : ''}
    >
        <use href="sprite.svg#${args.iconRef}" />
    </svg>
    <span class="visually-hidden">[screenreader label]</span>
</a>
`;

export const TextIconLinkHtml = (args) => /*html*/ `
<a
    href="#"
    class="button"
    data-variant="text-icon${args.swapIconPosition ? '-reverse' : ''}"
    ${args.linkSize ? `data-size="${args.linkSize}"` : ''}
    ${args.linkStyle ? `data-style="${args.linkStyle}"` : ''}
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
