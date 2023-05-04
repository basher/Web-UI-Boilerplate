export default class VideoPlayer {
    private player: Element;
    private btnPlay: HTMLButtonElement | null;
    private mediaContainer: HTMLElement | null;
    private iframe: HTMLIFrameElement | null;

    constructor(player: Element) {
        this.player = player;
        this.btnPlay = this.player.querySelector('[data-button="modal-open"]');
        this.mediaContainer = this.player.querySelector('.responsive-media');
        this.iframe = this.player.querySelector('iframe');

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
        this.btnPlay?.addEventListener('click', (e: MouseEvent) =>
            this.handlePlay(e),
        );
    }

    private handlePlay(e: MouseEvent): void {
        e.preventDefault();

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
