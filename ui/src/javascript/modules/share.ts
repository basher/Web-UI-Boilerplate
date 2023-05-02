import { addJSClass } from '../utils/progressive-enhancement';

export default class Share {
    private share: Element;
    private btnShare: HTMLButtonElement | null;
    private btnCopy: HTMLButtonElement | null;
    private shareFallback: HTMLElement | null;
    private shareInput: HTMLInputElement | null;
    private toggleClassname: string;

    constructor(share: Element) {
        this.share = share;
        this.btnShare = this.share.querySelector('[data-button="share"]');
        this.btnCopy = this.share.querySelector('[data-button="copy"]');
        this.shareFallback = this.share.querySelector('[data-share-fallback]');
        this.shareInput = this.share.querySelector('[data-share-input]');
        this.toggleClassname = 'u-hidden';

        this.init();
    }

    public static start(): void {
        const shareComponents = document.querySelectorAll(
            '[data-module="share"]',
        );

        shareComponents &&
            shareComponents.forEach((share) => {
                addJSClass(share);
                const instance = new Share(share);
                return instance;
            });
    }

    private init(): void {
        console.log('init...', this.share);
    }
}
