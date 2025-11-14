export const ModalHtml = () => `
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>

<button
    type="button"
    class="button button--text button--primary"
    command="show-modal"
    commandfor="modal1"
    aria-haspopup="dialog"
>
    Open modal
</button>

<dialog
    class="modal__dialog"
    closedby="any"
    id="modal1"
>
    <div class="modal__header">
        <button
            type="button"
            class="button button--icon modal__close"
            command="close"
            commandfor="modal1"
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

    <div class="modal__content">
        <h2>Modal dialog</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
    </div>
</dialog>

<br/><br/>
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>
`;

export const ModalOverflowHtml = () => `
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>

<button
    type="button"
    class="button button--text button--primary"
    command="show-modal"
    commandfor="modal2"
    aria-haspopup="dialog"
>
    Open modal
</button>

<dialog
    class="modal__dialog"
    closedby="any"
    id="modal2"
>
    <div class="modal__header">
        <button
            type="button"
            class="button button--icon modal__close"
            command="close"
            commandfor="modal2"
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

    <div class="modal__content">
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

<br/><br/>
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>
`;

export const ModalMultipleCloseButtonsHtml = () => `
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>

<button
    type="button"
    class="button button--text button--primary"
    command="show-modal"
    commandfor="modal3"
    aria-haspopup="dialog"
>
    Open modal
</button>

<dialog
    class="modal__dialog"
    closedby="any"
    id="modal3"
>
    <div class="modal__content">
        <h2>Modal dialog</h2>

        <p>There are 2 buttons which, when clicked, both close the modal.</p>

        <div class="button-group ">
            <button
                type="button"
                class="button button--text"
                command="close"
                commandfor="modal3"
            >
                Cancel
            </button>
            <button
                type="button"
                class="button button--text button--positive"
                command="close"
                commandfor="modal3"
            >
                Yes please
            </button>
        </div>
    </div>
</dialog>

<br/><br/>
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>
`;
