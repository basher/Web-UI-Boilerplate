export default class Prose {
    private prose: Element;
    private tables: NodeListOf<HTMLTableElement>;

    constructor(prose: Element) {
        this.prose = prose;
        this.tables = this.prose.querySelectorAll('table');

        this.init();
    }

    public static start(): void {
        const proses = document.querySelectorAll('[data-module="prose"]');

        proses.forEach((prose) => {
            const instance = new Prose(prose);
            return instance;
        });
    }

    private init(): void {
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
