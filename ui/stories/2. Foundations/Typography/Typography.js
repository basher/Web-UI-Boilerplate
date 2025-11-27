export const TypographyHtml = () => `
<h1 class="h--xl">Heading level 1 with "h--xl" class</h1>

<h1>Heading level 1 <br/>with line break to test line-height</h1>

<h1 class="h--2">Heading level 1 with "h--2" class</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
<p>Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

<h2>Heading level 2 <br/>with line break to test line-height</h2>
<h3><a href="#">This H3 is a link</a></h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

<h3>Heading level 3 <br/>with line break to test line-height</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

<h4>Heading level 4 <br/>with line break to test line-height</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

<h5>Heading level 5 <br/>with line break to test line-height</h5>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
<h6>Heading level 6 <br/>with line break to test line-height</h6>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

<p><small>Smallprint using <code>&lt;small&gt;</code> element.</small></p>
<p>Inline <a href="#">text link</a>.</p>
<p><del>Deleted text</del> using the <code>&lt;del&gt;</code> element.</p>
<ul>
    <li>Unordered list item</li>
    <li>Unordered list item</li>
    <li>Unordered list item
        <ul>
            <li>Nested unordered list item</li>
            <li>Nested unordered list item</li>
            <li>Nested unordered list item
                <ul>
                    <li>Nested unordered list item</li>
                    <li>Nested unordered list item</li>
                    <li>Nested unordered list item</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
<ol>
    <li>Ordered list item</li>
    <li>Ordered list item</li>
    <li>Ordered list item
        <ol>
            <li>Nested ordered list item</li>
            <li>Nested ordered list item</li>
            <li>Nested ordered list item
                <ol>
                    <li>Nested ordered list item</li>
                    <li>Nested ordered list item</li>
                    <li>Nested ordered list item</li>
                </ol>
            </li>
        </ol>
    </li>
</ol>
<dl>
    <dt>Definition list - term</dt>
    <dd>Definition list - description. Lorem ipsum dolor sit amet consectetur adipisicing elit.</dd>
    <dt>Definition list - term</dt>
    <dd>Definition list - description. Lorem ipsum dolor sit amet consectetur adipisicing elit.</dd>
    <dt>Definition list - term</dt>
    <dd>Definition list - description. Lorem ipsum dolor sit amet consectetur adipisicing elit.</dd>
</dl>
<hr/>
<pre><code>
&lt;p&gt;Code example...&lt;/p&gt;
&lt;style&gt;
    code { font-family: var(--type-font-family-monospace); }
&lt;/style&gt;
</code></pre>
`;
