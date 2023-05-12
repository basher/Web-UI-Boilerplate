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
    class="button toggle"
    type="button"
    role="switch"
    aria-checked="false"
    aria-label="toggle / switch"
>
    <span class="toggle__on" aria-hidden="true">on</span>
    <span class="toggle__off" aria-hidden="true">off</span>
</button>
`;
Toggle.storyName = 'Toggle button (or switch)';

export const ToggleWithLabel = () => `
<button
    class="button toggle toggle--has-label"
    type="button"
    role="switch"
    aria-checked="false"
>
    <span class="toggle__label">toggle / switch label</span>
    <span class="toggle__indicator">
        <span class="toggle__on" aria-hidden="true">on</span>
        <span class="toggle__off" aria-hidden="true">off</span>
    </span>
</button>
`;
ToggleWithLabel.storyName = 'Toggle with visible label';
