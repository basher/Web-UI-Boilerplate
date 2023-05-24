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
}
export const disclosure = (arg: Disclosure): void => {
    const toggleClassname = 'u-hidden';

    arg.button.setAttribute('aria-expanded', 'false');
    arg.content?.classList.add(toggleClassname);

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
        arg.content?.classList.toggle(toggleClassname);

        return true;
    });

    // Bind ESC key to hide content, and set keyboard focus to the button. Also handle clicking outside the disclosure component.
    if (arg.bindEscapeKey) {
        document.addEventListener('keyup', (e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                arg.button.setAttribute('aria-expanded', 'false');
                arg.button.focus();
                arg.content?.classList.add(toggleClassname);
            }
        });

        document.addEventListener('click', (e: Event) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const target = e.target as any;
            const insideButton = arg.button.contains(target);
            const insideContent = arg.content?.contains(target);

            if (!insideButton && !insideContent) {
                arg.button.setAttribute('aria-expanded', 'false');
                arg.content?.classList.add(toggleClassname);
            }
        });
    }
};
