export const SkinHtml = (args) => /*html*/ `
<div ${args.skin ? `class="${args.skin}"` : ''}>
    <p>Skin component allows us to add a <i>&quot;skin&quot;</i> or theming layer to components. For example:<p>
    <ul>
        <li>Background &amp; foreground colours</li>
        <li>Borders &amp; shadows</li>
        <li>Padding</li>
        <li>Text alignment</li>
    </ul>
</div>
`;

export const SkinWrapperHtml = (args) => /*html*/ `
<div class="wrapper ${args.skin ? `${args.skin}` : ''}">
<p>Skin component also allows us to add a <i>&quot;skin&quot;</i> or theming layer to wrapper component.</p>
<p>Wrapper (default)</p>
</div>
`;
