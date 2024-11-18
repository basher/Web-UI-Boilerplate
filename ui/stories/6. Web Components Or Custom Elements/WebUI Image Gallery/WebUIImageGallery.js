export const WebUIImageGalleryHtml = () => `
<webui-image-gallery>
    <ul class="grid">
        <li>
            <webui-modal>
                <a
                    href="https://dummyimage.com/1140x810&text=image+1"
                    data-open
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
                </a>

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
                            <span class="visually-hidden">Close dialog</span>
                        </button>
                    </div>

                    <div
                        class="modal__content"
                        data-content
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
                                alt="[large image 1]"
                                loading="lazy"
                                height="810"
                                width="1440"
                            />
                        </picture>
                    </div>
                </dialog>
            </webui-modal>
        </li>
        <li>
            <webui-modal>
                <a
                    href="https://dummyimage.com/1140x810&text=image+2"
                    data-open
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
                </a>

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
                            <span class="visually-hidden">Close dialog</span>
                        </button>
                    </div>

                    <div
                        class="modal__content"
                        data-content
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
                                alt="[large image 2]"
                                loading="lazy"
                                height="810"
                                width="1440"
                            />
                        </picture>
                    </div>
                </dialog>
            </webui-modal>
        </li>
        <li>
            <webui-modal>
                <a
                    href="https://dummyimage.com/1140x810&text=image+3"
                    data-open
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
                </a>

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
                            <span class="visually-hidden">Close dialog</span>
                        </button>
                    </div>

                    <div
                        class="modal__content"
                        data-content
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
                                alt="[large image 3]"
                                loading="lazy"
                                height="810"
                                width="1440"
                            />
                        </picture>
                    </div>
                </dialog>
            </webui-modal>
        </li>
        <li>
            <webui-modal>
                <a
                    href="https://dummyimage.com/1140x810&text=image+4"
                    data-open
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
                </a>

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
                            <span class="visually-hidden">Close dialog</span>
                        </button>
                    </div>

                    <div
                        class="modal__content"
                        data-content
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
                                alt="[large image 4]"
                                loading="lazy"
                                height="810"
                                width="1440"
                            />
                        </picture>
                    </div>
                </dialog>
            </webui-modal>
        </li>
        <li>
            <webui-modal>
                <a
                    href="https://dummyimage.com/1140x810&text=image+5"
                    data-open
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
                </a>

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
                            <span class="visually-hidden">Close dialog</span>
                        </button>
                    </div>

                    <div
                        class="modal__content"
                        data-content
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
                                alt="[large image 5]"
                                loading="lazy"
                                height="810"
                                width="1440"
                            />
                        </picture>
                    </div>
                </dialog>
            </webui-modal>
        </li>
    </ul>
</webui-image-gallery>
`;
