export default class WebUIModal extends HTMLElement {
    private dialog: HTMLDialogElement | null;
    private modalContent: HTMLElement | null;
    private btnModalOpen: HTMLButtonElement | HTMLAnchorElement | null;
    private btnsModalClose: NodeListOf<HTMLElement>;
    private classNameModalOpen: string;

    constructor() {
        super();

        this.dialog = this.querySelector('dialog');
        this.modalContent = this.querySelector('[data-content]');
        this.btnModalOpen = this.querySelector('[data-open]');
        this.btnsModalClose = this.querySelectorAll('[data-close]');
        this.classNameModalOpen = 'has-modal-open';

        if (!this.btnModalOpen || !this.dialog) return;

        this.btnModalOpen?.addEventListener('click', this);
        this.btnsModalClose.forEach((btnModalClose) => {
            btnModalClose?.addEventListener('click', this);
        });
    }

    private handleOpen(): void {
        if (!this.dialog?.open) {
            this.dialog?.showModal();

            // Set focus on content rather than the 'close' button.
            this.modalContent?.setAttribute('tabIndex', '-1');
            this.modalContent?.focus();

            document.body.classList.add(this.classNameModalOpen);
        }
    }

    private handleClose(): void {
        this.dialog?.close();
        document.body.classList.remove(this.classNameModalOpen);
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
    public handleEvent(e: MouseEvent) {
        const target = e.currentTarget as HTMLButtonElement;

        // Click 'open' button.
        if (target?.dataset.open === '') {
            // Prevent default behaviour on any links that open a modal.
            e.preventDefault();

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
