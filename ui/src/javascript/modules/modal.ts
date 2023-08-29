class Modal {
    private modal: Element;
    private dialog: HTMLDialogElement | null;
    private modalContent: HTMLElement | null;
    private btnModalOpen: HTMLButtonElement | null;
    private allBtnModalClose: NodeListOf<HTMLElement>;
    private classNameModalOpen: string;

    constructor(modal: Element) {
        this.modal = modal;
        this.dialog = this.modal.querySelector('dialog');
        this.modalContent = this.modal.querySelector('[data-modal-content]');
        this.btnModalOpen = this.modal.querySelector(
            '[data-button="modal-open"]',
        );
        this.allBtnModalClose = this.modal.querySelectorAll(
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
        this.allBtnModalClose.forEach((btnModalClose) => {
            btnModalClose?.addEventListener('click', () => {
                if (this.dialog?.open) {
                    this.dialog?.close();
                    // Set focus back on button that opened modal.
                    this.btnModalOpen?.focus();

                    document.body.classList.remove(this.classNameModalOpen);
                }
            });
        });
    }
}
export default Modal;
