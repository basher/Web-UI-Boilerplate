export const WebUIVideoPlayerHtml = () => /*html*/ `
<webui-video-player>
    <button
        type="button"
        class="button"
        command="show-modal"
        commandfor="video1"
        aria-haspopup="dialog"
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
    </button>

    <dialog
        class="modal__dialog"
        closedby="any"
        id="video1"
    >
        <div class="modal__header">
            <button
                type="button"
                class="button modal__close"
                data-button="icon"
                command="close"
                commandfor="video1"
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
<webui-video-player>
`;
