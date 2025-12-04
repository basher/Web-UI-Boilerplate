class WebUIDisclosure extends HTMLElement {
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

        if (!this.trigger || !this.content) return;

        this.trigger.addEventListener('click', this);
    }

    /**
     * @description Handle (global) event listeners which are not part of this web component. Setup accessibility attributes.
     */
    public connectedCallback(): void {
        document.addEventListener('keyup', (e: KeyboardEvent) =>
            this.handleGlobalKeyup(e),
        );
        document.addEventListener('click', (e: MouseEvent) =>
            this.handleGlobalClick(e),
        );

        this.setupA11y();
    }

    /**
     * @description Remove (global) event listeners.
     */
    public disconnectedCallback(): void {
        document.removeEventListener('keyup', this.handleGlobalKeyup);
        document.removeEventListener('click', this.handleGlobalClick);
    }

    /**
     * @description Handle constructor() event listeners.
     */
    public handleEvent(e: MouseEvent): void {
        const target = e.currentTarget as HTMLElement;
        const isExpanded =
            target?.getAttribute('aria-expanded') === 'true' || false;

        target?.setAttribute('aria-expanded', Boolean(!isExpanded).toString());
        this.content?.toggleAttribute('hidden');
    }

    /**
     * @description Setup accessibility attributes.
     */
    private setupA11y(): void {
        this.trigger?.removeAttribute('hidden');
        this.trigger?.setAttribute('aria-expanded', 'false');
        this.content?.setAttribute('hidden', '');

        // Auto-generate unique 'id' and 'aria-controls' attributes, using button 'parentElement' className or nodeName as a sensible prefix.
        if (this.trigger?.parentElement) {
            const unique = this.randomString(
                this.trigger.parentElement.classList[0] ||
                    this.trigger.parentElement.nodeName.toLowerCase(),
            );
            this.content?.setAttribute('id', unique);
            this.trigger.setAttribute('aria-controls', unique);
        }
    }

    /**
     * @description Generate a random string using a given prefix.
     */
    private randomString(string: string): string {
        const random = `${string}-${Math.random()
            .toString(36)
            .substring(2, 15)}`;

        return random;
    }

    /**
     * @description Hide disclosure content.
     */
    private hideContent(e?: KeyboardEvent): void {
        if (this.trigger?.getAttribute('aria-expanded') === 'true') {
            this.trigger?.setAttribute('aria-expanded', 'false');
            this.content?.setAttribute('hidden', '');

            // Set keyboard :FOCUS on the trigger button.
            if (e?.type === 'keyup') {
                this.trigger?.focus();
            }
        }
    }

    /**
     * @description Handle global 'keyup' event to close disclosure.
     */
    private handleGlobalKeyup(e: KeyboardEvent): void {
        if (this.bindEscapeKey && e.code === 'Escape') {
            this.hideContent(e);
        }
    }

    /**
     * @description Handle global 'click' event to close disclosure.
     */
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
}

customElements.define('webui-disclosure', WebUIDisclosure);
export default WebUIDisclosure;
