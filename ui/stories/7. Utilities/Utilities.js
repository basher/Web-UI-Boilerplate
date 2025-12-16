export const ScreenReaderHtml = () => /*html*/ `
<p>The content in the <code>&lt;div&gt;</code> below is hidden visually, but still announced by assistive technologies...</p>

<div class="visually-hidden">
    Visually hide content, but still make it available to assistive technologies.
</div>
`;

export const HideContentHtml = () => /*html*/ `
<p>The content in the <code>&lt;div&gt;</code> below is removed from the DOM entirely...</p>
<div class="u-hidden">
    Remove content from the DOM.
</div>

<p>And so is this content in the <code>&lt;div&gt;</code> below...</p>
<div hidden>
    Remove content from the DOM.
</div>
`;

export const CenterContentHtml = () => /*html*/ `
<div class="u-center">
    <h2>Heading level 2</h2>
    <h3>Heading level 3</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
<div>
`;
