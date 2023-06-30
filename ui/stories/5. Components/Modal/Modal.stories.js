/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Modal.mdx';

export default {
    title: 'Components/Modal',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
};

export const Modal = () => `
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>

<div class="modal" data-module="modal">
    <button
        type="button"
        class="button button--text button--primary"
        data-button="modal-open"
    >
        Open modal
    </button>

    <dialog class="modal__dialog">
        <div class="modal__header">
            <button
                type="button"
                class="button button--icon modal__close"
                data-button="modal-close"
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="icon"
                >
                    <title>close</title>
                    <use href="sprite.svg#close" />
                </svg>
                <span class="sr-only">Close</span>
            </button>
        </div>

        <div
            class="modal__content"
            data-modal-content
        >
            <h2>Modal dialog</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
        </div>
    </dialog>
</div>

<br/>
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>
`;

export const ModalOverflow = () => `
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>

<div class="modal" data-module="modal">
    <button
        type="button"
        class="button button--text button--primary"
        data-button="modal-open"
    >
        Open modal
    </button>

    <dialog class="modal__dialog">
        <div class="modal__header">
            <button
                type="button"
                class="button button--icon modal__close"
                data-button="modal-close"
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="icon"
                >
                    <title>close</title>
                    <use href="sprite.svg#close" />
                </svg>
                <span class="sr-only">Close</span>
            </button>
        </div>

        <div
            class="modal__content"
            data-modal-content
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
</div>

<br/>
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>
`;
ModalOverflow.storyName = 'Modal with overflowing content';

export const ModalMultipleCloseButtons = () => `
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>

<div class="modal" data-module="modal">
    <button
        type="button"
        class="button button--text button--primary"
        data-button="modal-open"
    >
        Open modal
    </button>

    <dialog class="modal__dialog">
        <div
            class="modal__content"
            data-modal-content
        >
            <h2>Modal dialog</h2>

            <p>There are 2 buttons which, when clicked, both close the modal.</p>

            <div class="button-group ">
                <button
                    type="button"
                    class="button button--text"
                    data-button="modal-close"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    class="button button--text button--positive"
                    data-button="modal-close"
                >
                    Yes please
                </button>
            </div>
        </div>
    </dialog>
</div>

<br/>
<p>
    Can this button be clicked/focused when modal dialog is open?
    <br/>
    <button type="button" class="button button--text">Am I clickable?</button>
</p>
`;
ModalMultipleCloseButtons.storyName = 'Modal with multiple close buttons';
