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
`;
