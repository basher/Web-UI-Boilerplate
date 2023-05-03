class Tabs {
    private tabComponent: Element;
    private tablist: HTMLElement | null;
    private tabpanels: NodeListOf<HTMLElement>;
    private tabTriggers: NodeListOf<HTMLElement>;
    private toggleClassname: string;

    constructor(tabComponent: Element) {
        this.tabComponent = tabComponent;
        this.tablist = this.tabComponent.querySelector('[data-tablist]');
        this.tabpanels = this.tabComponent.querySelectorAll('[data-tabpanel]');
        this.tabTriggers = this.tabComponent.querySelectorAll('[data-tab]');
        this.toggleClassname = 'u-hidden';

        this.init();
    }

    public static start(): void {
        const tabComponents = document.querySelectorAll('[data-module="tabs"]');

        tabComponents &&
            tabComponents.forEach((tabComponent) => {
                const instance = new Tabs(tabComponent);
                return instance;
            });
    }

    private init(): void {
        this.createTabs();
    }

    private createTabs(): void {
        // Hide all tabpanels initially.
        this.tabpanels.forEach((tabpanel) => {
            tabpanel.classList.add(this.toggleClassname);
        });

        // Update tablist properties.
        this.tablist?.setAttribute('role', 'tablist');

        // Update tab properties.
        this.tabTriggers.forEach((tabTrigger, index) => {
            const triggerHref = tabTrigger.getAttribute('href');
            const triggerId = triggerHref?.substring(1);
            tabTrigger.setAttribute('id', `${triggerId}-trigger`);

            tabTrigger.setAttribute('role', 'tab');
            tabTrigger.setAttribute('aria-selected', 'false');
            tabTrigger.setAttribute('tabIndex', '-1');

            // "triggerId" should match the ID on tabpanel.
            if (triggerId) {
                tabTrigger.setAttribute('aria-controls', triggerId);
            }

            // Make 1st tab "active" by default.
            if (index === 0) {
                tabTrigger.setAttribute('aria-selected', 'true');
                tabTrigger.setAttribute('tabIndex', '0');
            }

            tabTrigger.addEventListener('click', (e: MouseEvent) => {
                this.bindClickEvent(e);
            });
            tabTrigger.addEventListener('keydown', (e: KeyboardEvent) => {
                this.bindKeyboardEvent(e, index);
            });
        });

        // Update tabpanel properties.
        this.tabpanels.forEach((tabContainer, index) => {
            const tabContainerId = tabContainer.id;

            tabContainer.setAttribute('role', 'tabpanel');
            tabContainer.setAttribute(
                'aria-labelledby',
                `${tabContainerId}-trigger`,
            );
            tabContainer.setAttribute('tabIndex', '0');

            // Show 1st tabpanel by default.
            if (index === 0) {
                tabContainer.classList.remove(this.toggleClassname);
            }
        });
    }

    private bindClickEvent(e: MouseEvent): void {
        e.preventDefault();
        const trigger = e.currentTarget as HTMLElement;
        const triggerHref = trigger.getAttribute('href');
        const triggerId = triggerHref?.substring(1);

        // Hide all tabpanels.
        this.tabpanels.forEach((tabpanel) => {
            tabpanel.classList.add(this.toggleClassname);
        });

        // Update clicked tab and related tabpanel properties.
        this.tabTriggers.forEach((tabTrigger) => {
            tabTrigger.setAttribute('aria-selected', 'false');
            tabTrigger.setAttribute('tabIndex', '-1');
        });
        this.tabpanels.forEach((tabContainer) => {
            if (tabContainer.id === triggerId) {
                tabContainer.classList.remove(this.toggleClassname);
            }
        });
        trigger?.setAttribute('aria-selected', 'true');
        trigger?.setAttribute('tabIndex', '0');
    }

    private bindKeyboardEvent(e: KeyboardEvent, index: number): void {
        // Stop page jumping with certain key events with 'e.preventDefault()'.
        switch (e.code) {
            case 'ArrowRight':
                e.preventDefault();
                if (this.tabTriggers.length - index > 1) {
                    this.tabTriggers[index + 1].focus();
                    this.tabTriggers[index + 1].click();
                }
                break;
            case 'ArrowLeft':
                e.preventDefault();
                if (index > 0) {
                    this.tabTriggers[index - 1].focus();
                    this.tabTriggers[index - 1].click();
                }
                break;
            case 'Home':
                e.preventDefault();
                if (index !== 0) {
                    this.tabTriggers[0].focus();
                    this.tabTriggers[0].click();
                }
                break;
            case 'End':
                e.preventDefault();
                if (index !== this.tabTriggers.length - 1) {
                    this.tabTriggers[this.tabTriggers.length - 1].focus();
                    this.tabTriggers[this.tabTriggers.length - 1].click();
                }
                break;
            default:
                break;
        }
    }
}
export default Tabs;
