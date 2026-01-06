class WebUITabs extends HTMLElement {
    private tablist: HTMLElement | null;
    private tabpanels: NodeListOf<HTMLElement>;
    private tabTriggers: NodeListOf<HTMLElement>;

    constructor() {
        super();

        this.tablist = this.querySelector('[data-tablist]');
        this.tabpanels = this.querySelectorAll('[data-tabpanel]');
        this.tabTriggers = this.querySelectorAll('[data-tab]');

        if (
            !this.tablist ||
            this.tabpanels.length === 0 ||
            this.tabTriggers.length === 0
        )
            return;

        this.tabTriggers.forEach((tabTrigger, index) => {
            tabTrigger.addEventListener('click', (e: MouseEvent) => {
                this.bindClickEvent(e);
            });
            tabTrigger.addEventListener('keydown', (e: KeyboardEvent) => {
                this.bindKeyboardEvent(e, index);
            });
        });
    }

    /**
     * @description Create tabs.
     */
    public connectedCallback(): void {
        this.createTabs();
    }

    /**
     * @description Handle web component click event listener.
     */
    private bindClickEvent(e: MouseEvent): void {
        e.preventDefault();
        const trigger = e.currentTarget as HTMLElement;
        const triggerHref = trigger.getAttribute('href');
        const triggerId = triggerHref?.substring(1);

        // Hide all tabpanels.
        this.tabpanels.forEach((tabpanel) => {
            tabpanel.setAttribute('hidden', '');
        });

        // Update clicked tab and related tabpanel properties.
        this.tabTriggers.forEach((tabTrigger) => {
            tabTrigger.setAttribute('aria-selected', 'false');
            tabTrigger.setAttribute('tabIndex', '-1');
        });
        this.tabpanels.forEach((tabContainer) => {
            if (tabContainer.id === triggerId) {
                tabContainer.removeAttribute('hidden');
            }
        });
        trigger?.setAttribute('aria-selected', 'true');
        trigger?.setAttribute('tabIndex', '0');
    }

    /**
     * @description Handle web component keyboard event listener. Prevent viewport scrolling when tab focus changes.
     */
    private bindKeyboardEvent(e: KeyboardEvent, index: number): void {
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

    /**
     * @description Setup tabs structure. Add accessibility attributes.
     */
    private createTabs(): void {
        // Hide all tabpanels initially.
        this.tabpanels.forEach((tabpanel) => {
            tabpanel.setAttribute('hidden', '');
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

            // 'triggerId' should match the ID on tabpanel.
            if (triggerId) {
                tabTrigger.setAttribute('aria-controls', triggerId);
            }

            // Make 1st tab active by default.
            if (index === 0) {
                tabTrigger.setAttribute('aria-selected', 'true');
                tabTrigger.setAttribute('tabIndex', '0');
            }
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
                tabContainer.removeAttribute('hidden');
            }
        });
    }
}

customElements.define('webui-tabs', WebUITabs);
export default WebUITabs;
