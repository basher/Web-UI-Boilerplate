export default class ImageGallery {
    private gallery: Element;
    private btnModalOpen: HTMLAnchorElement | null;

    constructor(gallery: Element) {
        this.gallery = gallery;
        this.btnModalOpen = this.gallery.querySelector(
            '[data-button="modal-open"]',
        );

        this.init();
    }

    public static start(): void {
        const galleries = document.querySelectorAll(
            '[data-module="image-gallery"]',
        );

        galleries.forEach((gallery) => {
            const instance = new ImageGallery(gallery);
            return instance;
        });
    }

    private init(): void {
        this.btnModalOpen?.addEventListener('click', (e: MouseEvent) =>
            this.handleClick(e),
        );
    }

    private handleClick(e: MouseEvent): void {
        e.preventDefault();
    }
}
