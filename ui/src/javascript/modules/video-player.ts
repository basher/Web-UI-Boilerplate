export default class VideoPlayer {
    private player: Element;

    constructor(player: Element) {
        this.player = player;

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
        console.log(this.player);
    }
}
