import { disclosure } from '../utils/disclosure';

export default class WebUIDisclosure extends HTMLElement {
    private trigger: HTMLButtonElement | null;
    private content: HTMLElement | null;
    private bindEscapeKey?: boolean;
    private bindClickOutside?: boolean;

    constructor() {
        super();

        this.trigger = this.querySelector('[data-trigger]');
        this.content = this.querySelector('[data-content]');
        this.bindEscapeKey = this.hasAttribute('data-bind-escape-key');
        this.bindClickOutside = this.hasAttribute('data-bind-click-outside');

        this.init();

        // TODO:
        // 1. All events are handled by the external 'disclosure()' dependency.
        // 2. Refactor to handle events here. For now, just console.log().
        this.trigger?.addEventListener('click', this);
    }

    private init(): void {
        if (!this.trigger || !this.content) return;

        // TODO: This code might become redundant (see 2 above).
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

    handleEvent(e: MouseEvent) {
        // TODO: See 2 above.
        console.log('handleEvent', e);
    }
}
