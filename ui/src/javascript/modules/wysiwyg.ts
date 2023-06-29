export default class Wysiwyg {
    private wysiwyg: Element;
    private tables: NodeListOf<HTMLTableElement>;

    constructor(wysiwyg: Element) {
        this.wysiwyg = wysiwyg;
        this.tables = this.wysiwyg.querySelectorAll('table');

        this.init();
    }

    public static start(): void {
        const wysiwygs = document.querySelectorAll('[data-module="wysiwyg"]');

        wysiwygs.forEach((wysiwyg) => {
            const instance = new Wysiwyg(wysiwyg);
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
