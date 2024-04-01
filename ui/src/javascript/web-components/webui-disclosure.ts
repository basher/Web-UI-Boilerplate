import { disclosure } from '../utils/disclosure';

export default class WebUIDisclosure extends HTMLElement {
    private trigger: HTMLButtonElement | null;
    private content: HTMLElement | null;
    private bindEscapeKey?: boolean;
    private bindClickOutside?: boolean;

    constructor() {
        super();

        this.trigger = this.querySelector('[trigger]');
        this.content = this.querySelector('[content]');
        this.bindEscapeKey = this.hasAttribute('bind-escape-key');
        this.bindClickOutside = this.hasAttribute('bind-click-outside');

        this.init();

        // NOTE: There are NO event listeners here. All events are handled by the external 'disclosure()' dependency.
    }

    private init(): void {
        if (!this.trigger || !this.content) return;

        const button = this.trigger;
        const content = this.content;
        const bindEscapeKey = this.bindEscapeKey;
        const bindClickOutside = this.bindClickOutside;

        disclosure({
            button,
            content,
            bindEscapeKey,
            bindClickOutside,
        });
    }
}
