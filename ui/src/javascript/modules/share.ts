import { addJSClass } from '../utils/progressive-enhancement';
import { disclosure } from '../utils/disclosure';

export default class Share {
    private share: Element;
    private btnShare: HTMLButtonElement | null;
    private btnCopy: HTMLButtonElement | null;
    private shareFallback: HTMLElement | null;
    private shareInput: HTMLInputElement | null;
    private canonical: HTMLLinkElement | null;
    private shareTitle: string | undefined;
    private shareUrl: string | undefined;

    constructor(share: Element) {
        this.share = share;
        this.btnShare = this.share.querySelector('[data-share-button]');
        this.btnCopy = this.share.querySelector('[data-share-copy]');
        this.shareFallback = this.share.querySelector('[data-share-fallback]');
        this.shareInput = this.share.querySelector('[data-share-input]');

        this.canonical = document.querySelector('link[rel=canonical]');
        this.shareTitle = this.btnShare?.dataset.shareTitle || document.title;
        this.shareUrl =
            this.btnShare?.dataset.shareUrl ||
            this.canonical?.href ||
            document.location.href;

        this.init();
    }

    public static start(): void {
        const shareComponents = document.querySelectorAll(
            '[data-module="share"]',
        );

        shareComponents.forEach((share) => {
            addJSClass(share);
            const instance = new Share(share);
            return instance;
        });
    }

    private init(): void {
        this.initShare();
    }

    private initShare(): void {
        if (navigator.share) {
            this.shareFallback && this.shareFallback.setAttribute('hidden', '');
            this.btnShare && this.btnShare.removeAttribute('hidden');

            this.btnShare &&
                this.btnShare.addEventListener('click', () => {
                    navigator.share({
                        title: this.shareTitle,
                        url: this.shareUrl,
                    });
                });
        } else {
            // Show/hide fallback input & button.
            const button = this.btnShare;
            const content = this.shareFallback;
            button &&
                disclosure({
                    button,
                    content,
                });

            if (this.shareInput) {
                this.shareInput.value = this.shareUrl || '';
            }

            this.btnCopy &&
                this.btnCopy.addEventListener('click', () => {
                    this.shareInput && this.handleCopyUrl(this.shareInput);
                });
        }
    }

    private handleCopyUrl(fallbackInput: HTMLInputElement): void {
        if (!navigator.clipboard) {
            return;
        }
        fallbackInput.select();
        navigator.clipboard.writeText(fallbackInput.value);
    }
}
