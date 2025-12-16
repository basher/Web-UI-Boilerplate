const style = /*html*/ `
<style>
    [class*="m-"],
    [class*="p-"] {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
    }

    [class*="m-"] ul {
        margin: 0;
    }
</style>
`;

export const MarginPaddingHtml = (args) => /*html*/ `
${style}
<div class="\
 ${args.marginBlock && args.marginBlock !== '' ? `m-block-${args.marginBlock}` : 'm-block'}\
 ${args.marginInline && args.marginInline !== '' ? `m-inline-${args.marginInline}` : 'm-inline'}\
 ${args.paddingBlock && args.paddingBlock !== '' ? `p-block-${args.paddingBlock}` : 'p-block'}\
 ${args.paddingInline && args.paddingInline !== '' ? `p-inline-${args.paddingInline}` : 'p-inline'}\
">
    <p>Adjust <code>margin-block</code> | <code>margin-inline</code> and <code>padding-block</code> | <code>padding-inline</code> values.</p>
    <ul>
        <li>Default values are set for <code>.m-block</code> | <code>.m-inline</code> and <code>.p-block</code> | <code>.p-inline</code> classes.</li>
        <li>Additional modifiers can be applied. For example, <code>-0</code>, <code>-xsmall</code>, <code>-xlarge</code>, etc.</li>
    </ul>
</div>
`;
