const style = `
<style>
    [class*="u-m"],
    [class*="u-p"] {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
    }

    [class*="u-m"] ul {
        margin: 0;
    }
</style>
`;

export const MarginPaddingHtml = (args) => `
${style}
<div class="
    u-m-block--${args.marginBlock}
    u-m-inline--${args.marginInline}
    u-p-block--${args.paddingBlock}
    u-p-inline--${args.paddingInline}
">
    <p>Adjust <code>margin-block</code> | <code>margin-inline</code> and <code>padding-block</code> | <code>padding-inline</code> values.</p>
    <ul>
        <li>Default values are set for <code>.u-m-block</code> | <code>.u-m-inline</code> and <code>.u-p-block</code> | <code>.u-p-inline</code> classes.</li>
        <li>Additional modifiers can be applied. For example, <code>--0</code>, <code>--xs</code>, <code>--xl</code>, etc.</li>
    </ul>
</div>
`;

export const ScreenReaderHtml = () => `
<p>The content below is hidden visually, but still announced by screen readers...</p>

<div class="visually-hidden">
    Visually hide content, but still make it available to screen readers.
</div>
`;

export const HideContentHtml = () => `
<p>The content below is removed from the DOM entirely...</p>
<div class="u-hidden">
    Remove content from the DOM.
</div>

<p>And so is this content...</p>
<div hidden>
    Remove content from the DOM.
</div>
`;

export const CenterContentHtml = () => `
<div class="u-center">
    <h2>Heading level 2</h2>
    <h3>Heading level 3</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
<div>
`;
