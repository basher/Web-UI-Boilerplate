export default class FormValidate {
    private form: HTMLFormElement;

    constructor(form: HTMLFormElement) {
        this.form = form;

        this.init();
    }

    public static start(): void {
        const forms = document.querySelectorAll(
            '[data-module="form-validate"]',
        );

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [...(forms as any)].forEach((form) => {
            const instance = new FormValidate(form);
            return instance;
        });
    }

    private init(): void {
        this.initFormValidate();
        this.form.addEventListener('submit', (e: Event) =>
            this.handleSubmit(e),
        );
    }

    private initFormValidate(): void {
        // Prevent native HTML5 validation.
        this.form.noValidate = true;
    }

    private handleSubmit(e: Event): void {
        if (!this.form.checkValidity()) {
            e.preventDefault();

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            [...(this.form.elements as any)].forEach((field) => {
                if (!field.checkValidity()) {
                    console.log('error...', field, field.validity);
                }
            });
        }
        console.log('submit');
    }
}
