export const ImageGalleryHtml = () => `
<div class="image-gallery" data-module="image-gallery">
    <ul class="grid">
        <li>
            <div class="modal" data-module="modal">
                <a
                    class="image-gallery__link"
                    href="https://dummyimage.com/1140x810&text=image+1"
                    data-button="modal-open"
                >
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300&text=thumbnail+1"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300"
                            alt="[alt]"
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </a>

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
                                <use href="sprite.svg#close" />
                            </svg>
                            <span class="sr-only">Close</span>
                        </button>
                    </div>

                    <div
                        class="modal__content"
                        data-modal-content
                    >
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
                                alt="[alt]"
                                loading="lazy"
                                height="810"
                                width="1440"
                            />
                        </picture>
                    </div>
                </dialog>
            </div>
        </li>
        <li>
            <div class="modal" data-module="modal">
                <a
                    class="image-gallery__link"
                    href="https://dummyimage.com/1140x810&text=image+2"
                    data-button="modal-open"
                >
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300&text=thumbnail+2"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300"
                            alt="[alt]"
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </a>

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
                                <use href="sprite.svg#close" />
                            </svg>
                            <span class="sr-only">Close</span>
                        </button>
                    </div>

                    <div
                        class="modal__content"
                        data-modal-content
                    >
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
                                alt="[alt]"
                                loading="lazy"
                                height="810"
                                width="1440"
                            />
                        </picture>
                    </div>
                </dialog>
            </div>
        </li>
        <li>
            <div class="modal" data-module="modal">
                <a
                    class="image-gallery__link"
                    href="https://dummyimage.com/1140x810&text=image+3"
                    data-button="modal-open"
                >
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300&text=thumbnail+3"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300"
                            alt="[alt]"
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </a>

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
                                <use href="sprite.svg#close" />
                            </svg>
                            <span class="sr-only">Close</span>
                        </button>
                    </div>

                    <div
                        class="modal__content"
                        data-modal-content
                    >
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
                                alt="[alt]"
                                loading="lazy"
                                height="810"
                                width="1440"
                            />
                        </picture>
                    </div>
                </dialog>
            </div>
        </li>
        <li>
            <div class="modal" data-module="modal">
                <a
                    class="image-gallery__link"
                    href="https://dummyimage.com/1140x810&text=image+4"
                    data-button="modal-open"
                >
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300&text=thumbnail+4"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300"
                            alt="[alt]"
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </a>

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
                                <use href="sprite.svg#close" />
                            </svg>
                            <span class="sr-only">Close</span>
                        </button>
                    </div>

                    <div
                        class="modal__content"
                        data-modal-content
                    >
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
                                alt="[alt]"
                                loading="lazy"
                                height="810"
                                width="1440"
                            />
                        </picture>
                    </div>
                </dialog>
            </div>
        </li>
        <li>
            <div class="modal" data-module="modal">
                <a
                    class="image-gallery__link"
                    href="https://dummyimage.com/1140x810&text=image+5"
                    data-button="modal-open"
                >
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300&text=thumbnail+5"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300"
                            alt="[alt]"
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </a>

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
                                <use href="sprite.svg#close" />
                            </svg>
                            <span class="sr-only">Close</span>
                        </button>
                    </div>

                    <div
                        class="modal__content"
                        data-modal-content
                    >
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
                                alt="[alt]"
                                loading="lazy"
                                height="810"
                                width="1440"
                            />
                        </picture>
                    </div>
                </dialog>
            </div>
        </li>
    </ul>
</div>
`;
