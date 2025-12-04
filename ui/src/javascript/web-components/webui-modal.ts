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

        this.btnModalOpen.addEventListener('click', this);
        this.btnModalOpen.addEventListener('keydown', this);
        this.btnsModalClose.forEach((btnModalClose) => {
            btnModalClose?.addEventListener('click', this);
        });
    }

    /**
     * @description Handle (global) event listeners which are not part of this web component. Setup accessibility attributes.
     */
    public connectedCallback(): void {
        document.addEventListener('click', (e: MouseEvent) =>
            this.handleGlobalClick(e),
        );

        this.setupA11y();
    }

    /**
     * @description Remove (global) event listeners.
     */
    public disconnectedCallback(): void {
        document.removeEventListener('click', this.handleGlobalClick);
    }

    /**
     * @description Handle constructor() event listeners.
     */
    public handleEvent(e: KeyboardEvent): void {
        const target = e.currentTarget as HTMLButtonElement;

        // Ignore all keypresses except ENTER and SPACEBAR.
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

    /**
     * @description Setup accessibility attributes.
     */
    private setupA11y(): void {
        this.btnModalOpen?.setAttribute('aria-haspopup', 'dialog');
    }

    /**
     * @description Set focus on modal content when <dialog> is opened.
     */
    private handleOpen(): void {
        if (!this.dialog?.open) {
            this.dialog?.showModal();

            // Set focus on content rather than the 'close' button.
            this.modalContent?.setAttribute('tabIndex', '-1');
            this.modalContent?.focus();
        }
    }

    /**
     * @description Close modal.
     */
    private handleClose(): void {
        this.dialog?.close();
    }

    /**
     * @description Handle global 'click' event to close modal.
     */
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
}
