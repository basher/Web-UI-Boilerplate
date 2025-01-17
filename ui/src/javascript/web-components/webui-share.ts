export default class WebUIShare extends HTMLElement {
    private btnShare: HTMLButtonElement | null;
    private btnCopy: HTMLButtonElement | null;
    private shareFallback: HTMLElement | null;
    private shareInput: HTMLInputElement | null;
    private canonical: HTMLLinkElement | null;
    private shareTitle: string | undefined;
    private shareUrl: string | undefined;

    constructor() {
        super();

        this.btnShare = this.querySelector('[data-trigger]');
        this.btnCopy = this.querySelector('[data-copy]');
        this.shareFallback = this.querySelector('[data-content]');
        this.shareInput = this.querySelector('[data-input]');

        // URL and page title to be shared.
        this.canonical = document.querySelector('link[rel=canonical]');
        this.shareTitle = this.btnShare?.dataset.title || document.title;
        this.shareUrl =
            this.btnShare?.dataset.url ||
            this.canonical?.href ||
            document.location.href;

        if (!this.btnShare) return;

        this.btnShare.addEventListener('click', this);
        this.btnCopy?.addEventListener('click', this);
    }

    private handleShare(): void {
        // Use native Share API, or fallback to <webui-disclosure>.
        if (navigator.share) {
            this.shareFallback?.remove();

            navigator.share({
                title: this.shareTitle,
                url: this.shareUrl,
            });
        } else {
            if (this.shareInput) {
                this.shareInput.value = this.shareUrl || '';
            }
        }
    }

    private handleCopyUrl(fallbackInput: HTMLInputElement): void {
        if (!navigator.clipboard) {
            return;
        }
        fallbackInput.select();
        navigator.clipboard.writeText(fallbackInput.value);
    }

    // Handle constructor() event listeners.
    public handleEvent(e: MouseEvent) {
        const target = e.currentTarget as HTMLButtonElement;

        // Click 'share' button.
        if (target?.dataset.trigger === '') {
            this.handleShare();
        }

        // Click 'copy' button.
        if (target?.dataset.copy === '') {
            this.shareInput && this.handleCopyUrl(this.shareInput);
        }
    }
}
