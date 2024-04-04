export const WebUIVideoPlayerHtml = () => `
<webui-video-player>
    <webui-modal>
        <a
            href="https://www.youtube.com/embed/yHWSC-RW8kk"
            target="_blank"
            data-open
        >
            <picture>
                <source
                    srcset="https://dummyimage.com/400x300/ccc/ddd"
                    type="image/webp"
                >
                <img
                    class="image"
                    src="https://dummyimage.com/400x300/ccc/ddd"
                    alt="play video"
                    loading="lazy"
                    height="300"
                    width="400"
                />
            </picture>
            <svg
                aria-hidden="true"
                focusable="false"
                class="icon"
            >
                <use href="sprite.svg#video" />
            </svg>
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
                    <span class="sr-only">Close</span>
                </button>
            </div>

            <div
                class="modal__content"
                data-content
            >
                <div class="responsive-media">
                    <iframe
                        class="responsive-media__item"
                        src="https://www.youtube.com/embed/yHWSC-RW8kk"
                        height="315"
                        width="560"
                        allowfullscreen
                        title="YouTube video player"
                        loading="lazy"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    >
                    </iframe>
                </div>
            </div>
        </dialog>
    <webui-modal>
</webui-video-player>
`;
