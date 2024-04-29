export const WebUIModalHtml = () => `
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>

<webui-modal>
    <button
        type="button"
        class="button button--text button--primary"
        data-open
    >
        Open modal
    </button>

    <dialog class="modal__dialog">
        <div class="modal__header">
            <button
                type="button"
                class="button button--icon modal__close"
                data-close
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="icon"
                >
                    <use href="sprite.svg#close" />
                </svg>
                <span class="sr-only">Close dialog</span>
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
    <button type="button" class="button button--text">Am I clickable?</button>
</p>
`;

export const WebUIModalOverflowHtml = () => `
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>

<webui-modal>
    <button
        type="button"
        class="button button--text button--primary"
        data-open
    >
        Open modal
    </button>

    <dialog class="modal__dialog">
        <div class="modal__header">
            <button
                type="button"
                class="button button--icon modal__close"
                data-close
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="icon"
                >
                    <use href="sprite.svg#close" />
                </svg>
                <span class="sr-only">Close dialog</span>
            </button>
        </div>

        <div
            class="modal__content"
            data-content
        >
            <h2>Modal dialog</h2>

            <p>Modal content is very long, to test overflow...</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
        </div>
    </dialog>
</webui-modal>

<br/><br/>
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>
`;

export const WebUIModalMultipleCloseButtonsHtml = () => `
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>

<webui-modal>
    <button
        type="button"
        class="button button--text button--primary"
        data-open
    >
        Open modal
    </button>

    <dialog class="modal__dialog">
        <div
            class="modal__content"
            data-content
        >
            <h2>Modal dialog</h2>

            <p>There are 2 buttons which, when clicked, both close the modal.</p>

            <div class="button-group ">
                <button
                    type="button"
                    class="button button--text"
                    data-close
                >
                    Cancel
                </button>
                <button
                    type="button"
                    class="button button--text button--positive"
                    data-close
                >
                    Yes please
                </button>
            </div>
        </div>
    </dialog>
</webui-modal>

<br/><br/>
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>
`;
