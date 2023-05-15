export default class FormValidate {
    private form: Element;

    constructor(form: Element) {
        this.form = form;

        this.init();
    }

    public static start(): void {
        const forms = document.querySelectorAll(
            '[data-module="form-validate"]',
        );

        forms.forEach((form) => {
            const instance = new FormValidate(form);
            return instance;
        });
    }

    private init(): void {
        this.initFormValidate();
    }

    private initFormValidate(): void {
        // Prevent native HTML5 validation.
        this.form.setAttribute('novalidate', '');
    }
}
