import { addJSClass } from '../utils/progressive-enhancement';
import { disclosure } from '../utils/disclosure';

export default class Disclosure {
    private disclosure: Element;
    private btnDisclosure: HTMLButtonElement | null;
    private content: HTMLElement | null;

    constructor(disclosure: Element) {
        this.disclosure = disclosure;
        this.btnDisclosure = this.disclosure.querySelector(
            '[data-button="disclosure"]',
        );
        this.content = this.disclosure.querySelector('[data-disclosure]');

        this.init();
    }

    public static start(): void {
        const disclosureComponents = document.querySelectorAll(
            '[data-module="disclosure"]',
        );

        disclosureComponents.forEach((disclosure) => {
            addJSClass(disclosure);
            const instance = new Disclosure(disclosure);
            return instance;
        });
    }

    private init(): void {
        this.initdisclosure();
    }

    private initdisclosure(): void {
        // Show/hide content.
        const button = this.btnDisclosure as HTMLElement;
        const content = this.content as HTMLElement;
        const bindEscapeKey = this.disclosure.hasAttribute(
            'data-disclosure-escape-key',
        );
        disclosure({
            button,
            content,
            bindEscapeKey,
        });
    }
}
