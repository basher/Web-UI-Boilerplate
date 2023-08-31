import { randomString } from './random-string';

/**
 * Function - used by any component that needs to show|hide content, when Accordion or Tab component cannot be used.
 *
 * @param {HTMLElement} button - usually a <button>.
 * @param {HTMLElement} content - usually a <div> whose content is shown|hidden.
 * @param {boolean} bindEscapeKey - define if ESC key should hide content.
 *
 * @return {void}
 *
 * @example
 *
 *      disclosure({ button, content });
 */
interface Disclosure {
    button: HTMLElement;
    content: HTMLElement | null;
    bindEscapeKey?: boolean;
    bindClickOutside?: boolean;
}

const TOGGLE_CLASSNAME = 'u-hidden';

const handleClose = (arg: Disclosure): void => {
    arg.button.setAttribute('aria-expanded', 'false');
    arg.button.focus(); // Set keyboard focus to the button
    arg.content?.classList.add(TOGGLE_CLASSNAME);
};

export const disclosure = (arg: Disclosure): void => {
    arg.button.setAttribute('aria-expanded', 'false');
    arg.content?.classList.add(TOGGLE_CLASSNAME);

    // Auto-generate unique 'id' and 'aria-controls' attributes, using button 'parentElement' classname as a sensible prefix.
    if (arg.button.parentElement) {
        const unique = randomString(arg.button.parentElement.classList[0]);
        arg.content?.setAttribute('id', unique);
        arg.button.setAttribute('aria-controls', unique);
    }

    arg.button.addEventListener('click', (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const isExpanded =
            target?.getAttribute('aria-expanded') === 'true' || false;

        target?.setAttribute('aria-expanded', Boolean(!isExpanded).toString());
        arg.content?.classList.toggle(TOGGLE_CLASSNAME);

        return true;
    });

    // Bind ESC key to hide content.
    if (arg.bindEscapeKey) {
        document.addEventListener('keyup', (e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                handleClose(arg);
            }
        });
    }

    // Handle clicking outside the disclosure component.
    if (arg.bindClickOutside) {
        document.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLElement;
            const insideButton = arg.button.contains(target);
            const insideContent = arg.content?.contains(target);

            if (!insideButton && !insideContent) {
                handleClose(arg);
            }
        });
    }
};
