export const ImageGalleryHtml = () => `
<ul class="image-gallery grid">
    <li>
        <button
            type="button"
            class="button"
            command="show-modal"
            commandfor="image1"
        >
            <picture>
                <source
                    srcset="https://dummyimage.com/400x300&text=thumbnail+1"
                    type="image/webp"
                >
                <img
                    class="image"
                    src="https://dummyimage.com/400x300"
                    alt="[thumbnail 1]"
                    loading="lazy"
                    height="300"
                    width="400"
                />
            </picture>
        </button>

        <dialog
            class="modal__dialog"
            closedby="any"
            id="image1"
        >
            <div class="modal__header">
                <button
                    type="button"
                    class="button button--icon modal__close"
                    command="close"
                    commandfor="image1"
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
                <picture>
                    <source
                        media="(min-width: 480px)"
                        srcset="https://dummyimage.com/1440x810&text=image+1"
                        type="image/webp"
                    >
                    <source
                        media="(max-width: 479px)"
                        srcset="https://dummyimage.com/480x270&text=image+1"
                        type="image/webp"
                    >
                    <img
                        class="image"
                        src="https://dummyimage.com/1440x810&text=image+1"
                        alt="[large image 1]"
                        loading="lazy"
                        height="810"
                        width="1440"
                    />
                </picture>
            </div>
        </dialog>
    </li>
    <li>
        <button
            type="button"
            class="button"
            command="show-modal"
            commandfor="image2"
        >
            <picture>
                <source
                    srcset="https://dummyimage.com/400x300&text=thumbnail+2"
                    type="image/webp"
                >
                <img
                    class="image"
                    src="https://dummyimage.com/400x300"
                    alt="[thumbnail 2]"
                    loading="lazy"
                    height="300"
                    width="400"
                />
            </picture>
        </button>

        <dialog
            class="modal__dialog"
            closedby="any"
            id="image2"
        >
            <div class="modal__header">
                <button
                    type="button"
                    class="button button--icon modal__close"
                    command="close"
                    commandfor="image2"
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
                <picture>
                    <source
                        media="(min-width: 480px)"
                        srcset="https://dummyimage.com/1440x810&text=image+2"
                        type="image/webp"
                    >
                    <source
                        media="(max-width: 479px)"
                        srcset="https://dummyimage.com/480x270&text=image+2"
                        type="image/webp"
                    >
                    <img
                        class="image"
                        src="https://dummyimage.com/1440x810&text=image+2"
                        alt="[large image 2]"
                        loading="lazy"
                        height="810"
                        width="1440"
                    />
                </picture>
            </div>
        </dialog>
    </li>
    <li>
        <button
            type="button"
            class="button"
            command="show-modal"
            commandfor="image3"
        >
            <picture>
                <source
                    srcset="https://dummyimage.com/400x300&text=thumbnail+3"
                    type="image/webp"
                >
                <img
                    class="image"
                    src="https://dummyimage.com/400x300"
                    alt="[thumbnail 3]"
                    loading="lazy"
                    height="300"
                    width="400"
                />
            </picture>
        </button>

        <dialog
            class="modal__dialog"
            closedby="any"
            id="image3"
        >
            <div class="modal__header">
                <button
                    type="button"
                    class="button button--icon modal__close"
                    command="close"
                    commandfor="image3"
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
                <picture>
                    <source
                        media="(min-width: 480px)"
                        srcset="https://dummyimage.com/1440x810&text=image+3"
                        type="image/webp"
                    >
                    <source
                        media="(max-width: 479px)"
                        srcset="https://dummyimage.com/480x270&text=image+3"
                        type="image/webp"
                    >
                    <img
                        class="image"
                        src="https://dummyimage.com/1440x810&text=image+3"
                        alt="[large image 3]"
                        loading="lazy"
                        height="810"
                        width="1440"
                    />
                </picture>
            </div>
        </dialog>
    </li>
    <li>
        <button
            type="button"
            class="button"
            command="show-modal"
            commandfor="image4"
        >
            <picture>
                <source
                    srcset="https://dummyimage.com/400x300&text=thumbnail+4"
                    type="image/webp"
                >
                <img
                    class="image"
                    src="https://dummyimage.com/400x300"
                    alt="[thumbnail 4]"
                    loading="lazy"
                    height="300"
                    width="400"
                />
            </picture>
        </button>

        <dialog
            class="modal__dialog"
            closedby="any"
            id="image4"
        >
            <div class="modal__header">
                <button
                    type="button"
                    class="button button--icon modal__close"
                    command="close"
                    commandfor="image4"
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
                <picture>
                    <source
                        media="(min-width: 480px)"
                        srcset="https://dummyimage.com/1440x810&text=image+4"
                        type="image/webp"
                    >
                    <source
                        media="(max-width: 479px)"
                        srcset="https://dummyimage.com/480x270&text=image+4"
                        type="image/webp"
                    >
                    <img
                        class="image"
                        src="https://dummyimage.com/1440x810&text=image+4"
                        alt="[large image 4]"
                        loading="lazy"
                        height="810"
                        width="1440"
                    />
                </picture>
            </div>
        </dialog>
    </li>
    <li>
        <button
            type="button"
            class="button"
            command="show-modal"
            commandfor="image5"
        >
            <picture>
                <source
                    srcset="https://dummyimage.com/400x300&text=thumbnail+5"
                    type="image/webp"
                >
                <img
                    class="image"
                    src="https://dummyimage.com/400x300"
                    alt="[thumbnail 5]"
                    loading="lazy"
                    height="300"
                    width="400"
                />
            </picture>
        </button>

        <dialog
            class="modal__dialog"
            closedby="any"
            id="image5"
        >
            <div class="modal__header">
                <button
                    type="button"
                    class="button button--icon modal__close"
                    command="close"
                    commandfor="image5"
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
                <picture>
                    <source
                        media="(min-width: 480px)"
                        srcset="https://dummyimage.com/1440x810&text=image+5"
                        type="image/webp"
                    >
                    <source
                        media="(max-width: 479px)"
                        srcset="https://dummyimage.com/480x270&text=image+5"
                        type="image/webp"
                    >
                    <img
                        class="image"
                        src="https://dummyimage.com/1440x810&text=image+5"
                        alt="[large image 5]"
                        loading="lazy"
                        height="810"
                        width="1440"
                    />
                </picture>
            </div>
        </dialog>
    </li>
</ul>
`;
