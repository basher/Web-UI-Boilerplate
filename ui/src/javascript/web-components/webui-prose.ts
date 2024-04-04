export default class WebUIProse extends HTMLElement {
    private tables: NodeListOf<HTMLTableElement>;

    constructor() {
        super();
        this.tables = this.querySelectorAll('table');
        this.wrapTables();
    }

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
