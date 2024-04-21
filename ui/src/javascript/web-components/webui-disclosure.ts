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

        if (!this.trigger || !this.content) return;

        this.setupA11y();

        this.trigger?.addEventListener('click', this);
    }

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

    private randomString(string: string): string {
        const random = `${string}-${Math.random()
            .toString(36)
            .substring(2, 15)}`;

        return random;
    }

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

    private handleGlobalKeyup(e: KeyboardEvent): void {
        if (this.bindEscapeKey && e.code === 'Escape') {
            this.hideContent(e);
        }
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

    // Handle constructor() event listeners.
    public handleEvent(e: MouseEvent) {
        const target = e.currentTarget as HTMLElement;
        const isExpanded =
            target?.getAttribute('aria-expanded') === 'true' || false;

        target?.setAttribute('aria-expanded', Boolean(!isExpanded).toString());
        this.content?.toggleAttribute('hidden');
    }

    // Handle (global) event listeners which are not part of this web component.
    public connectedCallback() {
        document.addEventListener('keyup', (e: KeyboardEvent) =>
            this.handleGlobalKeyup(e),
        );
        document.addEventListener('click', (e: MouseEvent) =>
            this.handleGlobalClick(e),
        );
    }

    public disconnectedCallback() {
        document.removeEventListener('keyup', this.handleGlobalKeyup);
        document.removeEventListener('click', this.handleGlobalClick);
    }
}
