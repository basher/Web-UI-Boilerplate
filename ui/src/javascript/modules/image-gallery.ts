export default class ImageGallery {
    private gallery: Element;
    private galleryItems: NodeListOf<HTMLElement>;

    constructor(gallery: Element) {
        this.gallery = gallery;
        this.galleryItems = this.gallery.querySelectorAll(
            '[data-module="modal"]',
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
        this.openModal();
    }

    private openModal(): void {
        this.galleryItems.forEach((galleryItem) => {
            const btnModalOpen = galleryItem.querySelector(
                '[data-button="modal-open"]',
            ) as HTMLAnchorElement;

            btnModalOpen?.addEventListener('click', (e: MouseEvent) => {
                // Prevent default link behaviour so large image loads in modal.
                e.preventDefault();
            });
        });
    }
}
