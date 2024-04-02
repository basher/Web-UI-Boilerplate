import { addJSClass } from '../utils/progressive-enhancement';
import { disclosure } from '../utils/disclosure';

export default class Share {
    private share: Element;
    private btnShare: HTMLButtonElement | null;
    private btnCopy: HTMLButtonElement | null;
    private shareFallback: HTMLElement | null;
    private shareInput: HTMLInputElement | null;

    constructor(share: Element) {
        this.share = share;
        this.btnShare = this.share.querySelector('[data-share-button]');
        this.btnCopy = this.share.querySelector('[data-share-copy]');
        this.shareFallback = this.share.querySelector('[data-share-fallback]');
        this.shareInput = this.share.querySelector('[data-share-input]');

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
        let shareTitle = '';
        let shareUrl = '';
        const canonical = document.querySelector(
            'link[rel=canonical]',
        ) as HTMLLinkElement;

        // Does share button have 'data-' attributes to identify the URL to be shared?
        if (
            this.btnShare &&
            this.btnShare.dataset.shareTitle &&
            this.btnShare.dataset.shareUrl
        ) {
            shareTitle = this.btnShare.dataset.shareTitle;
            shareUrl = this.btnShare.dataset.shareUrl;
        } else {
            shareTitle = document.title;
            shareUrl = canonical?.href || document.location.href;
        }

        if (navigator.share) {
            this.shareFallback && this.shareFallback.setAttribute('hidden', '');
            this.btnShare && this.btnShare.removeAttribute('hidden');

            this.btnShare &&
                this.btnShare.addEventListener('click', () => {
                    navigator.share({
                        title: shareTitle,
                        url: shareUrl,
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
                this.shareInput.value = shareUrl;
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
