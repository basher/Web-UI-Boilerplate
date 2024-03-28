import { addJSClass } from '../utils/progressive-enhancement';
import { disclosure } from '../utils/disclosure';

export default class Disclosure {
    private disclosure: Element;
    private btnDisclosure: HTMLButtonElement | null;
    private content: HTMLElement | null;
    private bindEscapeKey?: boolean;
    private bindClickOutside?: boolean;

    constructor(disclosure: Element) {
        this.disclosure = disclosure;
        this.btnDisclosure = this.disclosure.querySelector(
            '[data-disclosure-button]',
        );
        this.content = this.disclosure.querySelector(
            '[data-disclosure-content]',
        );
        this.bindEscapeKey = this.disclosure.hasAttribute(
            'data-disclosure-escape-key',
        );
        this.bindClickOutside = this.disclosure.hasAttribute(
            'data-disclosure-click-outside',
        );

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
        const button = this.btnDisclosure;
        const content = this.content;
        const bindEscapeKey = this.bindEscapeKey;
        const bindClickOutside = this.bindClickOutside;

        // Show/hide content.
        button &&
            disclosure({
                button,
                content,
                bindEscapeKey,
                bindClickOutside,
            });
    }
}
