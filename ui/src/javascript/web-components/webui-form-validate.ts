export default class FormValidate extends HTMLElement {
    private form: HTMLFormElement | null;
    private errorFieldClass: string;
    private errorMsgClass: string;

    constructor() {
        super();

        this.form = this.querySelector('form');
        this.errorFieldClass = 'form__field--has-error';
        this.errorMsgClass = 'form__error';

        if (!this.form) return;

        // Prevent native HTML5 validation.
        this.form.noValidate = true;

        this.form.addEventListener('submit', this);
        this.form.addEventListener('reset', this);
        this.form.addEventListener('blur', this, true);
    }

    private handleSubmit(e: Event): void {
        if (!this.form?.checkValidity()) {
            e.preventDefault();

            [...(this.form?.elements as any)].forEach((field) => {
                if (!field.checkValidity()) {
                    this.showError(field);
                }
            });

            // Focus on 1st error.
            const firstError = this.form?.querySelector(
                '[aria-invalid]',
            ) as HTMLElement;
            firstError?.focus();
        }
    }

    private handleReset(): void {
        if (!this.form?.checkValidity()) {
            [...(this.form?.elements as any)].forEach((field) => {
                if (!field.checkValidity()) {
                    this.removeError(field);
                }
            });
        }
    }

    private handleBlur(e: Event): void {
        // Need to use 'any' type as 'checkValidity' & 'type' properties do not exist on 'HTMLElement'.
        const field = e.target as any;

        // If field is valid, remove any errors.
        if (field?.checkValidity()) {
            if (field.type === 'submit' || field.type === 'reset') {
                return;
            }
            this.removeError(field);
        }
    }

    private showError(field: any): void {
        const errorMsg = document.createElement('span');
        const fieldWrapper = field.closest('.form__field');
        const fieldset = fieldWrapper.querySelector('fieldset');

        errorMsg.classList.add(this.errorMsgClass);
        errorMsg.id =
            field.name !== '' ? `${field.name}-error` : `${field.id}-error`;
        errorMsg.textContent = field.validationMessage;

        fieldWrapper?.classList.add(this.errorFieldClass);
        field.setAttribute('aria-invalid', 'true');
        field.setAttribute('aria-describedby', errorMsg.id);

        // Only add 1 error msg per field (inluding grouped fields inside a <fieldset>).
        if (!fieldWrapper?.querySelector(`#${errorMsg.id}`)) {
            let target;

            if (field.type === 'checkbox') {
                target = fieldWrapper.querySelector('.checkbox');
                fieldWrapper?.insertBefore(errorMsg, target);
                return;
            }

            // e.g. radio button groups.
            if (fieldset) {
                target = fieldWrapper.querySelector(`.${field.type}`);
                fieldset?.insertBefore(errorMsg, target);
                return;
            }

            fieldWrapper?.insertBefore(errorMsg, field);
        }
    }

    private removeError(field: any): void {
        const fieldWrapper = field.closest('.form__field');
        const errorMsg = fieldWrapper.querySelector(`.${this.errorMsgClass}`);
        const fieldset = fieldWrapper.querySelector('fieldset');

        field.removeAttribute('aria-invalid');
        field.removeAttribute('aria-describedby');
        fieldWrapper?.classList.remove(this.errorFieldClass);
        errorMsg?.remove();

        // Also remove errors from any other grouped fields inside <fieldset>.
        if (fieldset) {
            const groupErrors = fieldset.querySelectorAll(
                '[aria-invalid="true"]',
            );

            groupErrors.forEach((error: HTMLElement) => {
                error.removeAttribute('aria-invalid');
                error.removeAttribute('aria-describedby');
            });
        }
    }

    // Handle constructor() event listeners.
    public handleEvent(e: MouseEvent): void {
        if (e.type === 'submit') {
            this.handleSubmit(e);
        }

        if (e.type === 'reset') {
            this.handleReset();
        }

        if (e.type === 'blur') {
            this.handleBlur(e);
        }
    }
}
