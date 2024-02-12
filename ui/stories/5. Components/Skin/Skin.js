export const SkinHtml = (args) => `
<div class="${args.skin}">
    <p>Skin component allows us to add a <i>&quot;skin&quot;</i> or theming layer to components. For example:<p>
    <ul>
        <li>Background &amp; foreground colours</li>
        <li>Borders &amp; shadows</li>
        <li>Padding</li>
        <li>Text alignment</li>
    </ul>
</div>
`;

export const SkinWrapperHtml = (args) => `
<div class="wrapper ${args.skin}">
<p>Skin component allows us to add a <i>&quot;skin&quot;</i> or theming layer to components.</p>
<p>Wrapper (default)</p>
</div>
`;
