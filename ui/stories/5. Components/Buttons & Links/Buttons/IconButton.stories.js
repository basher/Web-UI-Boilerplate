/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from '../IconButton.mdx';

export default {
    title: 'Components/Buttons & Links/Buttons/Icon',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        iconSize: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
        iconRef: {
            control: {
                type: 'select',
                options: ['down', 'left', 'right', 'up', 'close'],
            },
        },
        disabled: { control: 'boolean' },
    },
};

export const IconButton = (args) => `
<button
    type="button"
    class="button button--icon"
    ${args.disabled === true ? 'disabled' : ''}
>
    <svg
        aria-hidden="true"
        focusable="false"
        class="icon icon--${args.iconSize}"
    >
        <title>[title]</title>
        <use href="/sprite.svg#${args.iconRef}" />
    </svg>
    <span class="sr-only">[screenreader label]</span>
</button>
`;
IconButton.args = {
    iconRef: 'down',
};
IconButton.storyName = 'Icon';
