/**
 * Class. Web component that progressively enhances the CSS-only color scheme toggle component.
 */
class WebUIColorSchemeToggle extends HTMLElement {
    private toggle: HTMLSelectElement | null;
    private theme: string;

    constructor() {
        super();
        this.toggle = this.querySelector('[data-color-scheme-toggle]');
        this.theme = localStorage.getItem('webui-color-scheme') ?? 'auto';

        if (!this.toggle) return;

        this.getTheme(this.theme);
        this.toggle.addEventListener('change', this);
    }

    /**
     * Handle constructor() event listeners.
     */
    public handleEvent(): void {
        if (this.toggle) {
            this.setTheme(this.toggle.value);
        }
    }

    /**
     * Get color scheme from localStorage.
     */
    private getTheme(storedTheme: string): void {
        if (this.toggle) {
            this.toggle.value = storedTheme;
        }
    }

    /**
     * Set color scheme using localStorage.
     */
    private setTheme(changedTheme: string): void {
        localStorage.setItem('webui-color-scheme', changedTheme);
    }
}

customElements.define('webui-color-scheme-toggle', WebUIColorSchemeToggle);
export default WebUIColorSchemeToggle;
