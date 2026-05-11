export const WebUIColorSchemeToggleHtml = () => /*html*/ `
<webui-color-scheme-toggle>
    <div class="color-scheme-toggle">
        <label for="colour-scheme" class="label">Select colour scheme</label>
        <select
            class="select"
            id="colour-scheme"
            data-color-scheme-toggle
        >
            <option value="auto">Auto</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </div>
</webui-color-scheme-toggle>
`;
