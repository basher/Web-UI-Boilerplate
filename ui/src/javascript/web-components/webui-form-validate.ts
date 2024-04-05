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

        errorMsg.classList.add(this.errorMsgClass);
        errorMsg.id =
            field.name !== '' ? `${field.name}-error` : `${field.id}-error`;
        errorMsg.textContent = field.validationMessage;

        fieldWrapper?.classList.add(this.errorFieldClass);

        // Only add 1 error msg per field (e.g. a group of radio buttons).
        if (!fieldWrapper?.querySelector(`#${errorMsg.id}`)) {
            let target;

            if (field.type === 'checkbox') {
                target = fieldWrapper.querySelector('.checkbox');
                fieldWrapper?.insertBefore(errorMsg, target);
                return;
            }

            if (field.type === 'radio') {
                const fieldset = fieldWrapper.querySelector('fieldset');
                target = fieldWrapper.querySelector('.radio');
                fieldset?.insertBefore(errorMsg, target);
                return;
            }

            fieldWrapper?.insertBefore(errorMsg, field);
        }

        field.setAttribute('aria-invalid', 'true');
        field.setAttribute('aria-describedby', errorMsg.id);
    }

    private removeError(field: any): void {
        const fieldWrapper = field.closest('.form__field');
        const errorMsg = fieldWrapper.querySelector(`.${this.errorMsgClass}`);

        field.removeAttribute('aria-invalid');
        field.removeAttribute('aria-describedby');
        fieldWrapper?.classList.remove(this.errorFieldClass);
        errorMsg?.remove();
    }

    // Handle constructor() event listeners.
    handleEvent(e: MouseEvent) {
        if (e.type === 'submit') {
            this.handleSubmit(e);
        }

        if (e.type === 'blur') {
            this.handleBlur(e);
        }
    }
}
