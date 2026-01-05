import WebUIDisclosure from './webui-disclosure';

class WebUIPopover extends WebUIDisclosure {
    constructor() {
        super();

        if (
            // Use native popover and CSS anchor positioning, if supported.
            'popover' in HTMLElement.prototype &&
            CSS.supports('anchor-name', 'none') &&
            CSS.supports('position-anchor', 'auto')
        ) {
            return;
        } else {
            // Otherwise, remove 'popover' attributes, and fallback to <webui-disclosure> behaviour.
            this.trigger = this.querySelector('[popovertarget]');
            this.content = this.querySelector('[popover]');

            this.trigger?.removeAttribute('popovertarget');
            this.content?.removeAttribute('popover');

            // Add required 'data-' attributes for <webui-disclosure> functionality.
            this.trigger?.setAttribute('data-trigger', '');
            this.content?.setAttribute('data-content', '');

            // Re-bind click event listener.
            this.trigger?.addEventListener('click', this);
        }
    }
}

customElements.define('webui-popover', WebUIPopover);
export default WebUIPopover;
