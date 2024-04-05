export const WebUINotifyHtml = (args) => `
<webui-notify
    ${args.notificationType === 'error' ? 'role="alert"' : 'role="status"'}
    ${args.notificationType === undefined ? '' : `data-${args.notificationType}`}
>
    <div class="stack">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?</p>
    </div>
    ${
        args.hasCloseButton === true
            ? `<button
            type="button"
            class="button button--icon"
            data-close
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
</webui-notify>
`;
