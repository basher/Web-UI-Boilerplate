class Modal {
    private modal: Element;
    private dialog: HTMLDialogElement | null;
    private modalContent: HTMLElement | null;
    private btnModalOpen: HTMLButtonElement | null;
    private btnsModalClose: NodeListOf<HTMLElement>;
    private classNameModalOpen: string;

    constructor(modal: Element) {
        this.modal = modal;
        this.dialog = this.modal.querySelector('dialog');
        this.modalContent = this.modal.querySelector('[data-modal-content]');
        this.btnModalOpen = this.modal.querySelector(
            '[data-button="modal-open"]',
        );
        this.btnsModalClose = this.modal.querySelectorAll(
            '[data-button="modal-close"]',
        );
        this.classNameModalOpen = 'has-modal-open';

        this.init();
    }

    public static start(): void {
        const modals = document.querySelectorAll('[data-module="modal"]');

        modals.forEach((modal) => {
            const instance = new Modal(modal);
            return instance;
        });
    }

    private init(): void {
        this.openModal();
        this.closeModal();

        document.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLElement;
            this.handleClickOutside(target);
        });
    }

    private openModal(): void {
        this.btnModalOpen?.addEventListener('click', () => {
            if (!this.dialog?.open) {
                this.dialog?.showModal();
                // Set focus on content rather than the 'close' button.
                this.modalContent?.setAttribute('tabIndex', '-1');
                this.modalContent?.focus();

                document.body.classList.add(this.classNameModalOpen);
            }
        });
    }

    private closeModal(): void {
        this.btnsModalClose.forEach((btnModalClose) => {
            btnModalClose?.addEventListener('click', () => {
                this.handleClose();
            });
        });
    }

    private handleClickOutside(target: HTMLElement): void {
        if (
            this.dialog?.open &&
            !this.dialog.contains(target) &&
            !this.btnModalOpen?.contains(target)
        ) {
            this.handleClose();
        }
    }

    private handleClose(): void {
        this.dialog?.close();
        // Set focus back on button that opened modal.
        this.btnModalOpen?.focus();

        document.body.classList.remove(this.classNameModalOpen);
    }
}
export default Modal;
