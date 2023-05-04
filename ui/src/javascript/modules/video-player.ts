export default class VideoPlayer {
    private player: Element;
    private btnPlay: HTMLButtonElement | null;
    private mediaContainer: HTMLElement | null;
    private iframe: HTMLIFrameElement | null;
    private videoLink: HTMLAnchorElement | null;

    constructor(player: Element) {
        this.player = player;
        this.btnPlay = this.player.querySelector('[data-button="modal-open"]');
        this.mediaContainer = this.player.querySelector('.responsive-media');
        this.iframe = this.player.querySelector('.responsive-media__item');
        this.videoLink = this.player.querySelector('.video-player__link');

        this.init();
    }

    public static start(): void {
        const players = document.querySelectorAll(
            '[data-module="video-player"]',
        );

        players.forEach((player) => {
            const instance = new VideoPlayer(player);
            return instance;
        });
    }

    private init(): void {
        this.lazyload();
        this.btnPlay?.addEventListener('click', (e: MouseEvent) =>
            this.handlePlay(e),
        );
    }

    private lazyload(): void {
        // Browser does not support native lazyload for iframes.
        if (
            'loading' in HTMLIFrameElement.prototype === false &&
            this.videoLink?.href
        ) {
            this.iframe?.setAttribute('data-src', this.videoLink.href);
            this.iframe?.setAttribute('src', '');
        }
    }

    private handlePlay(e: MouseEvent): void {
        e.preventDefault();

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
}
