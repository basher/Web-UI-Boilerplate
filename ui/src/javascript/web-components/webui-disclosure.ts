import { randomString } from '../utils/random-string';

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

        this.trigger?.addEventListener('click', this);
    }

    private init(): void {
        if (!this.trigger || !this.content) return;

        this.a11ySetup();
    }

    private a11ySetup(): void {
        this.trigger?.removeAttribute('hidden');
        this.trigger?.setAttribute('aria-expanded', 'false');
        this.content?.setAttribute('hidden', '');

        // Auto-generate unique 'id' and 'aria-controls' attributes, using button 'parentElement' className or nodeName as a sensible prefix.
        if (this.trigger?.parentElement) {
            const unique = randomString(
                this.trigger.parentElement.classList[0] ||
                    this.trigger.parentElement.nodeName.toLowerCase(),
            );
            this.content?.setAttribute('id', unique);
            this.trigger.setAttribute('aria-controls', unique);
        }
    }

    private hideContent(): void {
        // Set keyboard focus to the trigger button.
        if (this.trigger?.getAttribute('aria-expanded') === 'true') {
            this.trigger?.focus();
            this.trigger?.setAttribute('aria-expanded', 'false');
        }
        this.content?.setAttribute('hidden', '');
    }

    private handleGlobalClick(e: MouseEvent): void {
        if (this.bindClickOutside) {
            const target = e.target as HTMLElement;
            const insideButton = this.trigger?.contains(target);
            const insideContent = this.content?.contains(target);

            if (!insideButton && !insideContent) {
                this.hideContent();
            }
        }
    }

    private handleGlobalKeyup(e: KeyboardEvent): void {
        if (this.bindEscapeKey && e.code === 'Escape') {
            this.hideContent();
        }
    }

    // Handle events from constructor().
    handleEvent(e: MouseEvent) {
        const target = e.currentTarget as HTMLElement;
        const isExpanded =
            target?.getAttribute('aria-expanded') === 'true' || false;

        target?.setAttribute('aria-expanded', Boolean(!isExpanded).toString());
        this.content?.toggleAttribute('hidden');
    }

    // Add/remove other (global) event listeners which are not part of this component.
    connectedCallback() {
        window.addEventListener('click', (e: MouseEvent) =>
            this.handleGlobalClick(e),
        );
        window.addEventListener('keyup', (e: KeyboardEvent) =>
            this.handleGlobalKeyup(e),
        );
    }

    disconnectedCallback() {
        window.removeEventListener('click', this.handleGlobalClick);
        window.removeEventListener('keyup', this.handleGlobalKeyup);
    }
}
