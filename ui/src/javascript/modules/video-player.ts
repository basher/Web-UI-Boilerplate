export default class VideoPlayer {
    private player: Element;
    private btnPlay: HTMLButtonElement | null;

    constructor(player: Element) {
        this.player = player;
        this.btnPlay = player.querySelector('[data-button="modal-open"]');

        this.init();
    }

    public static start(): void {
        const players = document.querySelectorAll(
            '[data-module="video-player"]',
        );

        players &&
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
    }
}
