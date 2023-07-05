/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Utilities.mdx';

export default {
    title: 'Utilities/Helpers and utilities',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
};

export const ScreenReader = () => `
<p>The content below is hidden visually, but still announced by screen readers...</p>

<div class="sr-only">
    Visually hide content, but still make it available to screen readers.
</div>
`;
ScreenReader.storyName = 'Screen reader only content';

export const HideContent = () => `
<p>The content below is removed from the DOM entirely...</p>

<div class="u-hidden">
    Remove content from the DOM.
</div>
`;
HideContent.storyName = 'Hide content';

export const CenterContent = () => `
<div class="u-center">
    <h2>Heading level 2</h2>
    <h3>Heading level 3</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
<div>
`;
CenterContent.storyName = 'Center content';
