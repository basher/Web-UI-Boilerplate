/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from '../IconButton.mdx';

export default {
    title: 'Components/Buttons & Links/Links/Icon',
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
                options: ['down', 'left', 'right', 'up'],
            },
        },
    },
};

export const IconLink = (args) => `
<a
    href="#"
    class="button button--icon"
>
    <svg
        aria-hidden="true"
        focusable="false"
        class="icon icon--${args.iconSize}"
    >
        <use href="sprite.svg#${args.iconRef}" />
    </svg>
    <span class="sr-only">[screenreader label]</span>
</a>
`;
IconLink.args = {
    iconRef: 'down',
};
IconLink.storyName = 'Icon';
