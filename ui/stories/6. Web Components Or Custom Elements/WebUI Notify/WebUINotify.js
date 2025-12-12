export const WebUINotifyHtml = (args) => /*html*/ `
<webui-notify
    ${args.notificationType === 'error' ? 'role="alert"' : 'role="status"'}
    ${args.notificationType === undefined ? '' : `data-${args.notificationType}`}
>
    <div class="stack">
        ${args.notificationType === 'success' ? '<h2>Success</h2>' : ''}
        ${args.notificationType === 'warning' ? '<h2>Warning</h2>' : ''}
        ${args.notificationType === 'error' ? '<h2>Error</h2>' : ''}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?</p>
    </div>
    ${
        args.hasCloseButton === true
            ? `<button
            type="button"
            class="button"
            data-variant="icon"
            data-close
        >
            <svg
                aria-hidden="true"
                focusable="false"
                class="icon"
            >
                <use href="sprite.svg#close" />
            </svg>
            <span class="visually-hidden">Close notification</span>
        </button>`
            : ''
    }
</webui-notify>
`;
