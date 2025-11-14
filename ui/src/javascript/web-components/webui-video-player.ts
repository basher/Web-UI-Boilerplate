export default class WebUIVideoPlayer extends HTMLElement {
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

        this.lazyload();
        this.btnPlay.addEventListener('click', this);
        this.handleModalClose();
    }

    private lazyload(): void {
        // 'data-src' attribute is used later in 'handlePlay()' method.
        this.iframe?.setAttribute('data-src', this.iframe.src);

        // Browser does not support native lazyload for iframes.
        if ('loading' in HTMLIFrameElement.prototype === false) {
            this.iframe?.setAttribute('src', '');
        }
    }

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

    /*
        When modal is closed, the video still plays!
        - Temp "fix" using MutationObserver to detect when the <dialog> 'open' attribute is removed.
        - See https://bugs.chromium.org/p/chromium/issues/detail?id=1481718#c1.
        - This "fix" does not work in Firefox.
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

    // Handle constructor() event listeners.
    public handleEvent(): void {
        this.handlePlay();
    }
}
