export const GridHtml = (args) => /*html*/ `
<p>Try removing grid items via devtools to see how grid auto-arranges itself.</p>
<div
    class="grid"
    ${args.gap ? `data-grid-gap="${args.gap}"` : ''}
>
    <div>Grid item 1 - lots more content<br><br>
    to demonstrate (default) equal height columns</div>
    <div>Grid item 2</div>
    <div>Grid item 3</div>
    <div>Grid item 4</div>
    <div>Grid item 5</div>
</div>
`;

export const GridListHtml = (args) => /*html*/ `
<p>Use semantic <code>&lt;ul&gt;</code> if it makes sense to have a <strong>list of related items</strong> rendered in a grid.</p>
<p>For example, a gallery of images, or a collection of product cards.</p>

<ul
    class="grid"
    ${args.gap ? `data-grid-gap="${args.gap}"` : ''}
>
    <li>Grid item 1 - lots more content<br><br>
    to demonstrate (default) equal height columns</li>
    <li>Grid item 2</li>
    <li>Grid item 3</li>
    <li>Grid item 4</li>
    <li>Grid item 5</li>
</ul>
`;

export const Grid2EqualColsHtml = (args) => /*html*/ `
<p>Divide a page (or section of a page) into <strong>equal width</strong> columns, etc.</p>
<div
    class="grid"
    ${args.gap ? `data-grid-gap="${args.gap}"` : ''}
>
    <div>Col 1</div>
    <div>Col 2</div>
</div>

<br>
<p>And here's another grid on same page.</p>
<div
    class="grid"
    ${args.gap ? `data-grid-gap="${args.gap}"` : ''}
>
    <div>Col 1</div>
    <div>Col 2</div>
</div>

<br>
<p>What if you <em>really</em> want 2 columns on small screens?<br>
Use the <code>data-grid="2-cols@small"</code> attribute to override the <code>grid-template-columns</code>.</p>
<div
    class="grid"
    data-grid="2-cols@small"
    ${args.gap ? `data-grid-gap="${args.gap}"` : ''}
>
    <div>Col 1</div>
    <div>Col 2</div>
</div>
`;

export const Grid3EqualColsHtml = (args) => /*html*/ `
<p>Divide a page (or section of a page) into <strong>equal width</strong> columns, etc.</p>
<div
    class="grid"
    ${args.gap ? `data-grid-gap="${args.gap}"` : ''}
>
    <div>Col 1</div>
    <div>Col 2</div>
    <div>Col 3</div>
</div>

<br>
<p>And here's another grid on same page.</p>
<div
    class="grid"
    ${args.gap ? `data-grid-gap="${args.gap}"` : ''}
>
    <div>Col 1</div>
    <div>Col 2</div>
    <div>Col 3</div>
</div>
`;

export const GridAsymmetricHtml = (args) => /*html*/ `
<p>All these examples use <code>container queries</code> in supported browsers, rather than <code>media queries</code>.<p>

<div class="grid-container">
    <div
        class="grid"
        data-grid="asymmetric"
        ${args.gap ? `data-grid-gap="${args.gap}"` : ''}
    >
        <div>
            Asymmetric col 1<br>
            <b>Default width = 66.66%</b>
        </div>
        <div>
            Col 2<br>
            <b>Default width = 33.33%</b>
        </div>
    </div>
</div>

<br>
<p>Override column widths.</p>
<div class="grid-container">
    <div
        class="grid"
        data-grid="asymmetric-75-25"
        ${args.gap ? `data-grid-gap="${args.gap}"` : ''}
    >
        <div>
            Asymmetric col 1<br>
            Override width = 75%
        </div>
        <div>
            Col 2<br>
            Override width = 25%
        </div>
    </div>
</div>

<br>
<p>Override column widths.</p>
<div class="grid-container">
    <div
        class="grid"
        data-grid="asymmetric-25-75"
        ${args.gap ? `data-grid-gap="${args.gap}"` : ''}
    >
        <div>
            Asymmetric col 1<br>
            Override width = 25%
        </div>
        <div>
            Col 2<br>
            Override width = 75%
        </div>
    </div>
</div>
`;
