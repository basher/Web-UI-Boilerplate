class WebUIVideoPlayer extends HTMLElement {
    private btnPlay: HTMLButtonElement | null;
    private mediaContainer: HTMLElement | null;
    private iframe: HTMLIFrameElement | null;
    private dialog: HTMLDialogElement | null;

    constructor() {
        super();

        this.btnPlay = this.querySelector('[command]');
        this.mediaContainer = this.querySelector('.responsive-media');
        this.iframe = this.querySelector('.responsive-media__item');
        this.dialog = this.querySelector('dialog');

        if (!this.btnPlay || !this.dialog) return;

        this.btnPlay.addEventListener('click', this);
    }

    /**
     * @description Setup <iframe> attributes. Handle modal closing.
     */
    public connectedCallback(): void {
        this.lazyload();
        this.handleModalClose();
    }

    /**
     * @description Handle web component event listeners.
     */
    public handleEvent(): void {
        this.handlePlay();
    }

    /**
     * @description Setup <iframe> attributes for lazy loading.
     */
    private lazyload(): void {
        // 'data-src' attribute is used later in 'handlePlay()' method.
        this.iframe?.setAttribute('data-src', this.iframe.src);

        // If browser does not support native lazyload for iframes.
        if ('loading' in HTMLIFrameElement.prototype === false) {
            this.iframe?.setAttribute('src', '');
        }
    }

    /**
     * @description Lazy load <iframe> when play button is clicked.
     */
    private handlePlay(): void {
        // Reset iframe 'src' back to original value.
        this.iframe?.dataset.src &&
            this.iframe?.setAttribute('src', this.iframe?.dataset.src);

        // Adjust aspect ratio based on video's natural dimensions.
        if (this.mediaContainer && this.iframe?.height && this.iframe.width) {
            const aspectRatio =
                parseInt(this.iframe.width, 10) /
                parseInt(this.iframe.height, 10);
            this.mediaContainer?.setAttribute(
                'style',
                `--mediaAspectRatio: ${aspectRatio}`,
            );
        }
    }

    /**
     * @description Stop video playing when modal is closed. Uses MutationObserver to detect when <dialog> 'open' attribute is removed. See https://bugs.chromium.org/p/chromium/issues/detail?id=1481718#c1. Note that this "fix" does not work in Firefox.
     */
    private handleModalClose(): void {
        const targetNode = this.dialog;
        const config = { attributes: true };

        const callback = (mutationList: MutationRecord[]): void => {
            for (const mutation of mutationList) {
                if (mutation.attributeName === 'open') {
                    if (!targetNode?.hasAttribute('open')) {
                        this.iframe?.setAttribute('src', '');
                    }
                }
            }
        };

        const observer = new MutationObserver(callback);
        targetNode && observer.observe(targetNode, config);
    }
}

customElements.define('webui-video-player', WebUIVideoPlayer);
export default WebUIVideoPlayer;
