/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default {
    title: 'Components/Message',
    component: Message,
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        messageType: {
            control: {
                type: 'select',
                options: ['success', 'warning', 'error'],
            },
        },
        hasCloseButton: {
            control: 'boolean',
        },
    },
};

export const Message = (args) => `
<div class="message message--${args.messageType}" data-module="message">
    <div class="stack">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?</p>
    </div>
    ${
        args.hasCloseButton === true
            ? `<button
            type="button"
            class="button button--icon message__close"
            data-button="message-close"
        >
            <svg
                aria-hidden="true"
                focusable="false"
                class="icon"
            >
                <use href="sprite.svg#close" />
            </svg>
            <span class="sr-only">Close</span>
        </button>`
            : ''
    }
</div>
`;
