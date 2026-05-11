export const ColorSchemeToggleSelectHtml = () => /*html*/ `
<div class="color-scheme-toggle">
    <label for="colour-scheme" class="label">Select colour scheme</label>
    <select
        class="select"
        id="colour-scheme"
    >
        <option value="auto">Auto</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    </select>
</div>
`;

export const ColorSchemeToggleRadioHtml = () => /*html*/ `
<fieldset class="color-scheme-toggle fieldset flex">
    <legend class="legend">Select colour scheme</legend>
    <div class="radio flex">
        <input
            type="radio"
            id="colour-scheme-auto"
            name="mode"
            value="auto"
        />
        <label for="colour-scheme-auto">Auto</label>
    </div>
    <div class="radio flex">
        <input
            type="radio"
            id="colour-scheme-light"
            name="mode"
            value="light"
        />
        <label for="colour-scheme-light">Light</label>
    </div>
    <div class="radio flex">
        <input
            type="radio"
            id="colour-scheme-dark"
            name="mode"
            value="dark"
        />
        <label for="colour-scheme-dark">Dark</label>
    </div>

</fieldset>
`;
