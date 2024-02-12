export const SkiplinksHtml = () => `
<nav class="skiplinks" aria-label="skiplinks">
    <a class="skiplinks__link" href="#main">Skip to main content</a>
</nav>

<p>Some content preceding skiplink target - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, incidunt non numquam deserunt dolorem, perspiciatis error asperiores fuga.</p>

<main id="main" tabindex="-1">
    <p>This is the <code>main</code> landmark.</p>
    <ul>
        <li>It is a skiplink target.</li>
        <li>It has <code>tabindex="-1"</code> to ensure it can receive focus.</li>
        <li>See the docs for more info.</li>
    </ul>
</main>
`;
