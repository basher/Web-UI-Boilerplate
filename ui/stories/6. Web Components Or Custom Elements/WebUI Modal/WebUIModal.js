export const WebUIModalHtml = () => /*html*/ `
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button" data-variant="text">Am I clickable?</button>
</p>

<webui-modal>
    <button
        type="button"
        class="button"
        data-variant="text"
        data-style="primary"
        data-open
    >
        Open modal
    </button>

    <dialog class="modal__dialog">
        <div class="modal__header">
            <button
                type="button"
                class="button modal__close"
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
                <span class="visually-hidden">Close dialog</span>
            </button>
        </div>

        <div
            class="modal__content"
            data-content
        >
            <h2>Modal dialog</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
        </div>
    </dialog>
</webui-modal>

<br/><br/>
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button" data-variant="text">Am I clickable?</button>
</p>
`;
