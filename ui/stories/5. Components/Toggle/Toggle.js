export const ToggleHtml = () => `
<button
    class="button toggle"
    type="button"
    role="switch"
    aria-checked="false"
    aria-label="toggle / switch"
>
    <span class="toggle__on" aria-hidden="true">on</span>
    <span class="toggle__off" aria-hidden="true">off</span>
</button>
`;

export const ToggleWithLabelHtml = () => `
<button
    class="button toggle toggle--has-label"
    type="button"
    role="switch"
    aria-checked="false"
>
    <span class="toggle__label">toggle / switch label</span>
    <span class="toggle__indicator">
        <span class="toggle__on" aria-hidden="true">on</span>
        <span class="toggle__off" aria-hidden="true">off</span>
    </span>
</button>
`;
