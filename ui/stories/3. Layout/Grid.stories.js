import docs from './Grid.mdx'

export default {
    title: 'Layout/Grid',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        gap: {
            control: {
                type: 'select',
                options: ['no-gap', 'gap-xs', 'gap-s', 'gap-l', 'gap-xl'],
            },
        },
    },
}

const style = `
<style>
    [class*="grid"] > * {
        background: rgba(235, 201, 90, 0.2);
        border: 1px dashed rgb(235, 201, 90);
        padding: 1rem;
    }

    .grid-container > * {
        background: none;
        border: 0;
        padding: 0;
    }
</style>
`

export const Grid = (args) => `
${style}
<p>Try removing grid items via devtools to see how grid auto-arranges itself.</p>
<div class=" grid grid--${args.gap}">
    <div>Grid item 1 - lots more content<br><br>
    to demonstrate (default) equal height columns</div>
    <div>Grid item 2</div>
    <div>Grid item 3</div>
    <div>Grid item 4</div>
    <div>Grid item 5</div>
</div>
`

export const GridList = (args) => `
${style}
<p>Use semantic <code>&lt;ul&gt;</code> if it makes sense to have a <strong>list of related items</strong> rendered in a grid.<br>
For example, a gallery of images, or list of product cards.</p>

<ul class="grid grid--${args.gap}">
    <li>Grid item 1 - lots more content<br><br>
    to demonstrate (default) equal height columns</li>
    <li>Grid item 2</li>
    <li>Grid item 3</li>
    <li>Grid item 4</li>
    <li>Grid item 5</li>
</ul>
`
GridList.storyName = 'Grid using unordered list'

export const Grid2EqualCols = (args) => `
${style}
<p>Divide a page (or section of a page) into <strong>equal width</strong> columns, etc.</p>
<div class="grid grid--${args.gap}">
    <div>Col 1</div>
    <div>Col 2</div>
</div>

<br>
<p>And here's another grid on same page.</p>
<div class="grid grid--${args.gap}">
    <div>Col 1</div>
    <div>Col 2</div>
</div>

<br>
<p>What if you <em>really</em> want 2 columns on small screens?<br>
Use the <code>grid--2-cols@small</code> classname to override the <code>grid-template-columns</code>.</p>
<div class="grid grid--2-cols@small grid--${args.gap}">
    <div>Col 1</div>
    <div>Col 2</div>
</div>
`
Grid2EqualCols.storyName = 'Equal 2-column grid'

export const Grid3EqualCols = (args) => `
${style}
<p>Divide a page (or section of a page) into <strong>equal width</strong> columns, etc.</p>
<div class="grid grid--${args.gap}">
    <div>Col 1</div>
    <div>Col 2</div>
    <div>Col 3</div>
</div>

<br>
<p>And here's another grid on same page.</p>
<div class="grid grid--${args.gap}">
    <div>Col 1</div>
    <div>Col 2</div>
    <div>Col 3</div>
</div>
`
Grid3EqualCols.storyName = 'Equal 3-column grid'

export const GridAsymmetric = (args) => `
${style}
<p>All these examples use <code>container queries</code> in supported browsers, rather than <code>media queries</code>.<p>

<div class="grid-container">
    <div class="grid--asymmetric grid--${args.gap}">
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

<div class="grid-container">
    <div class="grid--75-25 grid--${args.gap}">
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

<div class="grid-container">
    <div class="grid--25-75 grid--${args.gap}">
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
`
GridAsymmetric.storyName = 'Asymmetric 2-column grids'
