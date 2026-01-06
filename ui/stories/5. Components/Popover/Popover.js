export const PopoverHtml = () => /*html*/ `
<button
    type="button"
    class="button"
    data-button="text"
    popovertarget="popover1"
>
    Popover
</button>

<div id="popover1" popover>
    Popover content to be shown/hidden.
</div>

<br/>
<p>Some content below the popover trigger, to test the CSS positioning & stacking context of the popover when it is shown.</p>
`;
