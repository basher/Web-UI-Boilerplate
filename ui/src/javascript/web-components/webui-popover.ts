import WebUIDisclosure from './webui-disclosure';

class WebUIPopover extends WebUIDisclosure {
    private browserSupportsPopover: boolean;

    constructor() {
        super();

        this.browserSupportsPopover = false;

        if (
            // Use native popover and CSS anchor positioning, if supported.
            'popover' in HTMLElement.prototype &&
            CSS.supports('anchor-name', 'none') &&
            CSS.supports('position-anchor', 'auto')
        ) {
            this.browserSupportsPopover = true;
        } else {
            // Otherwise, fallback to <webui-disclosure> behaviour. Add/remove attributes.
            this.trigger = this.querySelector('[popovertarget]');
            this.content = this.querySelector('[popover]');

            this.trigger?.setAttribute('data-trigger', '');
            this.trigger?.removeAttribute('popovertarget');
            this.content?.setAttribute('data-content', '');
            this.content?.removeAttribute('popover');
            this.content?.removeAttribute('id');
        }
    }

    /**
     * @description Setup event listeners and accessibility attributes, as per <webui-disclosure>, but only if browser does not fully support popover.
     */
    public connectedCallback(): void {
        if (this.browserSupportsPopover) return;

        this.trigger?.addEventListener('click', this);
        document.addEventListener('keyup', (e: KeyboardEvent) =>
            this.handleGlobalKeyup(e),
        );
        document.addEventListener('click', (e: MouseEvent) =>
            this.handleGlobalClick(e),
        );
        this.setupA11y();
    }
}

customElements.define('webui-popover', WebUIPopover);
export default WebUIPopover;
