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
${args.marginBlock && args.marginBlock !== '' ? `u-m-block--${args.marginBlock}` : 'u-m-block'}
${args.marginInline && args.marginInline !== '' ? `u-m-inline--${args.marginInline}` : 'u-m-inline'}
${args.paddingBlock && args.paddingBlock !== '' ? `u-p-block--${args.paddingBlock}` : 'u-p-block'}
${args.paddingInline && args.paddingInline !== '' ? `u-p-inline--${args.paddingInline}` : 'u-p-inline'}
">
    <p>Adjust <code>margin-block</code> | <code>margin-inline</code> and <code>padding-block</code> | <code>padding-inline</code> values.</p>
    <ul>
        <li>Default values are set for <code>.u-m-block</code> | <code>.u-m-inline</code> and <code>.u-p-block</code> | <code>.u-p-inline</code> classes.</li>
        <li>Additional modifiers can be applied. For example, <code>--0</code>, <code>--xs</code>, <code>--xl</code>, etc.</li>
    </ul>
</div>
`;

export const ScreenReaderHtml = () => `
<p>The content in the <code>&lt;div&gt;</code> below is hidden visually, but still announced by assistive technologies...</p>

<div class="visually-hidden">
    Visually hide content, but still make it available to assistive technologys.
</div>
`;

export const HideContentHtml = () => `
<p>The content in the <code>&lt;div&gt;</code> below is removed from the DOM entirely...</p>
<div class="u-hidden">
    Remove content from the DOM.
</div>

<p>And so is this content in the <code>&lt;div&gt;</code> below...</p>
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
