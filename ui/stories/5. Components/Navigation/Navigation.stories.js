/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Navigation.mdx'

export default {
    title: 'Components/Navigation',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'beta',
        },
    },
};

export const Navigation = () => `
<nav
    class="nav"
    id="navigation"
    aria-label="Primary"
>
    <ul class="nav__list">
        <li class="nav__item">
            <a class="nav__link" href="#">Nav link</a>
        </li>
        <li class="nav__item">
            <a class="nav__link" href="#" aria-current="page">Nav link = current page</a>
        </li>
        <li class="nav__item">
            <a class="nav__link" href="#">Nav link</a>
        </li>
        <li class="nav__item">
            <a class="nav__link" href="#">Nav link</a>
        </li>
    </ul>
</nav>
`;
Navigation.storyName = 'Simple navigation';

export const HamburgerNavigation = () => `
<nav
    class="nav nav--hamburger"
    id="navigation"
    aria-label="Primary"
    data-module="disclosure"
    data-disclosure-escape-key
>
    <button
        type="button"
        class="button button--icon nav--hamburger__button"
        data-button="disclosure"
    >
        <svg
            aria-hidden="true"
            focusable="false"
            class="icon"
        >
            <title>Menu</title>
            <use href="/sprite.svg#hamburger" />
        </svg>
        <svg
            aria-hidden="true"
            focusable="false"
            class="icon"
        >
            <title>Menu</title>
            <use href="/sprite.svg#close" />
        </svg>
        <span class="sr-only">Menu</span>
    </button>

    <ul
        class="nav__list"
        data-disclosure
    >
        <li class="nav__item">
            <a class="nav__link" href="#">Nav link</a>
        </li>
        <li class="nav__item">
            <a class="nav__link" href="#" aria-current="page">Nav link = current page</a>
        </li>
        <li class="nav__item">
            <a class="nav__link" href="#">Nav link</a>
        </li>
        <li class="nav__item">
            <a class="nav__link" href="#">Nav link</a>
        </li>
    </ul>
</nav>

<br/>
<p>Some content below the navigation, to test the CSS positioning & stacking context of the navigation when it is shown.</p>
`;
HamburgerNavigation.storyName = 'Hamburger navigation';

export const DisclosureNavigation = () => `
TODO: disclosure...
`;
DisclosureNavigation.storyName = 'Disclosure navigation';

export const HybridDisclosureNavigation = () => `
TODO: hybrid disclosure...
`;
HybridDisclosureNavigation.storyName =
    'Hybrid disclosure navigation (with top-level links)';

export const MegaNavigation = () => `
TODO: mega-dropdown...
`;
MegaNavigation.storyName = 'Mega-dropdown navigation';
