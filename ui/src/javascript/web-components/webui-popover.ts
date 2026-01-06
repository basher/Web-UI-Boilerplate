import WebUIDisclosure from './webui-disclosure';

class WebUIPopover extends WebUIDisclosure {
    constructor() {
        super();

        if (
            // Use native popover and CSS anchor positioning, if supported.
            'popover' in HTMLElement.prototype &&
            CSS.supports('anchor-name', 'none') &&
            CSS.supports('position-anchor', 'auto')
        )
            return;

        // Otherwise, fallback to <webui-disclosure> behaviour: add required 'data-' attributes, remove 'popover' attributes.
        this.trigger = this.querySelector('[popovertarget]');
        this.content = this.querySelector('[popover]');

        this.trigger?.setAttribute('data-trigger', '');
        this.trigger?.removeAttribute('popovertarget');
        this.content?.setAttribute('data-content', '');
        this.content?.removeAttribute('popover');
        this.content?.removeAttribute('id');
    }
}

customElements.define('webui-popover', WebUIPopover);
export default WebUIPopover;
