/**
 * Class. Web component that progressively enhances HTML <table> elements by wrapping them with an overflowing container.
 */
class WebUIProse extends HTMLElement {
    private tables: NodeListOf<HTMLTableElement>;

    constructor() {
        super();
        this.tables = this.querySelectorAll('table');

        if (this.tables.length === 0) return;
    }

    /**
     * Setup table wrapper.
     */
    public connectedCallback(): void {
        this.wrapTables();
    }

    /**
     * Add table wrapper and accessibility properties.
     */
    private wrapTables(): void {
        this.tables.forEach((table) => {
            const tableWrapper = document.createElement('div');
            tableWrapper.classList.add('table-wrapper');
            tableWrapper.setAttribute('role', 'region');
            tableWrapper.setAttribute('tabIndex', '0');

            table.parentNode?.insertBefore(tableWrapper, table);
            tableWrapper.appendChild(table);
        });
    }
}

customElements.define('webui-prose', WebUIProse);
export default WebUIProse;
