export default class WebUIModal extends HTMLElement {
    private dialog: HTMLDialogElement | null;
    private modalContent: HTMLElement | null;
    private btnModalOpen: HTMLButtonElement | HTMLAnchorElement | null;
    private btnsModalClose: NodeListOf<HTMLElement>;

    constructor() {
        super();

        this.dialog = this.querySelector('dialog');
        this.modalContent = this.querySelector('[data-content]');
        this.btnModalOpen = this.querySelector('[data-open]');
        this.btnsModalClose = this.querySelectorAll('[data-close]');

        if (!this.btnModalOpen || !this.dialog) return;

        this.setupA11y();

        this.btnModalOpen.addEventListener('click', this);
        this.btnModalOpen.addEventListener('keydown', this);
        this.btnsModalClose.forEach((btnModalClose) => {
            btnModalClose?.addEventListener('click', this);
        });
    }

    private setupA11y(): void {
        if (this.btnModalOpen?.nodeName === 'A') {
            // Assign 'button' role to <a>.
            this.btnModalOpen.setAttribute('role', 'button');
        }
    }

    private handleOpen(): void {
        if (!this.dialog?.open) {
            this.dialog?.showModal();

            // Set focus on content rather than the 'close' button.
            this.modalContent?.setAttribute('tabIndex', '-1');
            this.modalContent?.focus();
        }
    }

    private handleClose(): void {
        this.dialog?.close();
    }

    private handleGlobalClick(e: MouseEvent): void {
        const target = e.target as HTMLElement;
        if (
            this.dialog?.open &&
            !this.dialog.contains(target) &&
            !this.btnModalOpen?.contains(target)
        ) {
            // Close modal when clicking outside.
            this.handleClose();
        }
    }

    private handleGlobalKeyup(e: KeyboardEvent): void {
        if (e.code === 'Escape') {
            this.handleClose();
        }
    }

    // Handle constructor() event listeners.
    public handleEvent(e: KeyboardEvent) {
        const target = e.currentTarget as HTMLButtonElement;

        // Ensure button can open modal with ENTER and SPACEBAR.
        if (e.type === 'keydown' && e.code !== 'Enter' && e.code !== 'Space')
            return;

        // Click 'open' button.
        if (target?.dataset.open === '') {
            this.handleOpen();
        }

        // Click 'close' button.
        if (target?.dataset.close === '') {
            this.handleClose();
        }
    }

    // Handle (global) event listeners which are not part of this web component.
    public connectedCallback() {
        document.addEventListener('keyup', (e: KeyboardEvent) =>
            this.handleGlobalKeyup(e),
        );
        document.addEventListener('click', (e: MouseEvent) =>
            this.handleGlobalClick(e),
        );
    }

    public disconnectedCallback() {
        document.removeEventListener('keyup', this.handleGlobalKeyup);
        document.removeEventListener('click', this.handleGlobalClick);
    }
}
