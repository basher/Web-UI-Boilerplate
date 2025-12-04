export const InputTextHtml = () => /*html*/ `
<label for="input-text" class="label">Text input label</label>
<input
    type="text"
    id="input-text"
    class="input"
    placeholder="placeholder"
/>
`;

export const InputEmailHtml = () => /*html*/ `
<label for="input-email" class="label">Email input label</label>
<input
    type="email"
    id="input-email"
    class="input"
    placeholder="email@domain.com"
    autocomplete="email"
/>
`;

export const InputTelHtml = () => /*html*/ `
<label for="input-tel" class="label">
    Telephone input label
    <span class="label__hint">UK number, usually 11 digits, can also include spaces</span>
</label>
<input
    type="tel"
    id="input-tel"
    class="input"
    pattern="^\\d{3,5}\\s?\\d{3,4}\\s?\\d{3,4}$"
    autocomplete="tel"
/>
`;
