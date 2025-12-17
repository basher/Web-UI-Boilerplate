const style = /*html*/ `
<style>
    .grid {
        grid-template-columns: repeat(auto-fit, 50px);
    }
</style>
`;

export const IconsHtml = (args) => /*html*/ `
${style}
<div class="grid">

    <svg
        role="img"
        focusable="false"
        class="icon"
        ${args.iconSize ? `data-icon-size="${args.iconSize}"` : ''}
    >
        <title>search</title>
        <use href="sprite.svg#search" />
    </svg>

    <svg
        role="img"
        focusable="false"
        class="icon"
        ${args.iconSize ? `data-icon-size="${args.iconSize}"` : ''}
    >
        <title>menu</title>
        <use href="sprite.svg#hamburger" />
    </svg>

    <svg
        role="img"
        focusable="false"
        class="icon"
        ${args.iconSize ? `data-icon-size="${args.iconSize}"` : ''}
    >
        <title>close</title>
        <use href="sprite.svg#close" />
    </svg>

    <svg
        role="img"
        focusable="false"
        class="icon"
        ${args.iconSize ? `data-icon-size="${args.iconSize}"` : ''}
    >
        <title>open</title>
        <use href="sprite.svg#plus" />
    </svg>

    <svg
        role="img"
        focusable="false"
        class="icon"
        ${args.iconSize ? `data-icon-size="${args.iconSize}"` : ''}
    >
        <title>close</title>
        <use href="sprite.svg#minus" />
    </svg>


    <svg
        role="img"
        focusable="false"
        class="icon"
        ${args.iconSize ? `data-icon-size="${args.iconSize}"` : ''}
    >
        <title>next</title>
        <use href="sprite.svg#right" />
    </svg>

    <svg
        role="img"
        focusable="false"
        class="icon"
        ${args.iconSize ? `data-icon-size="${args.iconSize}"` : ''}
    >
        <title>previous</title>
        <use href="sprite.svg#left" />
    </svg>

    <svg
        role="img"
        focusable="false"
        class="icon"
        ${args.iconSize ? `data-icon-size="${args.iconSize}"` : ''}
    >
        <title>close</title>
        <use href="sprite.svg#up" />
    </svg>

    <svg
        role="img"
        focusable="false"
        class="icon"
        ${args.iconSize ? `data-icon-size="${args.iconSize}"` : ''}
    >
        <title>open</title>
        <use href="sprite.svg#down" />
    </svg>

    <svg
        role="img"
        focusable="false"
        class="icon"
        ${args.iconSize ? `data-icon-size="${args.iconSize}"` : ''}
    >
        <title>share</title>
        <use href="sprite.svg#share" />
    </svg>

    <svg
        role="img"
        focusable="false"
        class="icon"
        ${args.iconSize ? `data-icon-size="${args.iconSize}"` : ''}
    >
        <title>twitter</title>
        <use href="sprite.svg#twitter" />
    </svg>

    <svg
        role="img"
        focusable="false"
        class="icon"
        ${args.iconSize ? `data-icon-size="${args.iconSize}"` : ''}
    >
        <title>facebook</title>
        <use href="sprite.svg#facebook" />
    </svg>

    <svg
        role="img"
        focusable="false"
        class="icon"
        ${args.iconSize ? `data-icon-size="${args.iconSize}"` : ''}
    >
        <title>linkedin</title>
        <use href="sprite.svg#linkedin" />
    </svg>

    <svg
        role="img"
        focusable="false"
        class="icon"
        ${args.iconSize ? `data-icon-size="${args.iconSize}"` : ''}
    >
        <title>play video</title>
        <use href="sprite.svg#video" />
    </svg>

</div>
`;
