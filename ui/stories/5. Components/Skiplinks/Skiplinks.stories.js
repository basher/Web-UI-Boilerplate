/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Skiplinks.mdx';

export default {
    title: 'Components/Skiplinks',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
};

export const Skiplinks = () => `
<nav class="skiplinks" aria-label="skiplinks">
    <a class="skiplinks__link" href="#navigation">Skip to navigation</a>
    <a class="skiplinks__link" href="#site-search">Skip to search</a>
    <a class="skiplinks__link" href="#main">Skip to main content</a>
    <a class="skiplinks__link" href="#footer">Skip to footer</a>
</nav>

<p>Some content preceding skiplink target - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, incidunt non numquam deserunt dolorem, perspiciatis error asperiores fuga.</p>

<main id="main" tabindex="-1">
    <p>The <code>main</code> landmark is a skiplink target. It has <code>tabindex="-1"</code> to ensure it can receive focus. See the docs for more info.</p>
</main>
`;
