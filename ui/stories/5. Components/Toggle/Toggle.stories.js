/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Toggle.mdx';

export default {
    title: 'Components/Toggle',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
};

export const Toggle = () => `
<button
    class="button button--text toggle"
    type="button"
    role="switch"
    aria-checked="false"
    aria-label="toggle / switch"
>
    <span class="toggle--on" aria-hidden="true">on</span>
    <span class="toggle--off" aria-hidden="true">off</span>
</button>
`;
Toggle.storyName = 'Toggle button (or Switch)';
