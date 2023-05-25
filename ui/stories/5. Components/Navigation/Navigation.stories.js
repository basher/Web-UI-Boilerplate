/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Navigation.mdx';

export default {
    title: 'Components/Navigation',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
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
        <li class="nav__item">
            <a class="nav__link" href="#">Nav link</a>
        </li>
    </ul>
</nav>
`;
Navigation.storyName = 'Simple navigation';

export const HamburgerSimpleNavigation = () => `
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
        data-disclosure-button
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
        data-disclosure-content
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
HamburgerSimpleNavigation.storyName = 'Hamburger (with simple navigation)';

export const DisclosureNavigation = () => `
<nav
    class="nav nav--disclosure"
    id="navigation"
    aria-label="Primary"
>
    <ul class="nav__list">
        <li
            class="nav__item nav__item--has-dropdown"
            data-module="disclosure"
            data-disclosure-escape-key
        >
            <a class="nav__link" href="#">Nav link with dropdown</a>

            <button
                type="button"
                class="button button--icon"
                data-disclosure-button
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="icon"
                >
                    <title>Menu</title>
                    <use href="/sprite.svg#down" />
                </svg>
                <span class="sr-only">[Nav link] dropdown</span>
            </button>

            <ul
                class="nav__list nav__list--dropdown"
                data-disclosure-content
            >
                <li class="nav__item">
                    <a class="nav__link" href="#">Nested nav link</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Nested nav link with longer name</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Nested nav link</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Nested nav link</a>
                </li>
            </ul>
        </li>

        <li class="nav__item">
            <a class="nav__link" href="#" aria-current="page">Nav link = current page</a>
        </li>
        <li class="nav__item">
            <a class="nav__link" href="#">Nav link</a>
        </li>

        <li
            class="nav__item nav__item--has-dropdown"
            data-module="disclosure"
            data-disclosure-escape-key
        >
            <a class="nav__link" href="#">Nav link with dropdown</a>

            <button
                type="button"
                class="button button--icon"
                data-disclosure-button
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="icon"
                >
                    <title>Menu</title>
                    <use href="/sprite.svg#down" />
                </svg>
                <span class="sr-only">[Nav link] dropdown</span>
            </button>

            <ul
                class="nav__list nav__list--dropdown"
                data-disclosure-content
            >
                <li class="nav__item">
                    <a class="nav__link" href="#">Nested nav link</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Nested nav link with longer name</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Nested nav link</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Nested nav link</a>
                </li>
            </ul>
        </li>

        <li class="nav__item">
            <a class="nav__link" href="#">Nav link</a>
        </li>
    </ul>
</nav>

<br/>
<p>Some content below the navigation, to test the CSS positioning & stacking context of the navigation dropdowns when they are shown.</p>
`;
DisclosureNavigation.storyName =
    'Disclosure navigation (with top-level links and dropdown menus)';

export const HamburgerDisclosureNavigation = () => `
<nav
    class="nav nav--hamburger nav--disclosure"
    id="navigation"
    aria-label="Primary"
    data-module="disclosure"
    data-disclosure-escape-key
>
    <button
        type="button"
        class="button button--icon nav--hamburger__button"
        data-disclosure-button
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
        data-disclosure-content
    >
        <li
            class="nav__item nav__item--has-dropdown"
            data-module="disclosure"
            data-disclosure-escape-key
        >
            <a class="nav__link" href="#">Nav link with dropdown</a>

            <button
                type="button"
                class="button button--icon"
                data-disclosure-button
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="icon"
                >
                    <title>Menu</title>
                    <use href="/sprite.svg#down" />
                </svg>
                <span class="sr-only">[Nav link] dropdown</span>
            </button>

            <ul
                class="nav__list nav__list--dropdown"
                data-disclosure-content
            >
                <li class="nav__item">
                    <a class="nav__link" href="#">Nested nav link</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Nested nav link with longer name</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Nested nav link</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Nested nav link</a>
                </li>
            </ul>
        </li>

        <li class="nav__item">
            <a class="nav__link" href="#" aria-current="page">Nav link = current page</a>
        </li>
        <li class="nav__item">
            <a class="nav__link" href="#">Nav link</a>
        </li>

        <li
            class="nav__item nav__item--has-dropdown"
            data-module="disclosure"
            data-disclosure-escape-key
        >
            <a class="nav__link" href="#">Nav link with dropdown</a>

            <button
                type="button"
                class="button button--icon"
                data-disclosure-button
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="icon"
                >
                    <title>Menu</title>
                    <use href="/sprite.svg#down" />
                </svg>
                <span class="sr-only">[Nav link] dropdown</span>
            </button>

            <ul
                class="nav__list nav__list--dropdown"
                data-disclosure-content
            >
                <li class="nav__item">
                    <a class="nav__link" href="#">Nested nav link</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Nested nav link with longer name</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Nested nav link</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Nested nav link</a>
                </li>
            </ul>
        </li>

        <li class="nav__item">
            <a class="nav__link" href="#">Nav link</a>
        </li>
    </ul>
</nav>

<br/>
<p>Some content below the navigation, to test the CSS positioning & stacking context of the navigation when it is shown.</p>
`;
HamburgerDisclosureNavigation.storyName =
    'Hamburger (with disclosure navigation)';

export const MegaNavigation = () => `
TODO...
`;
MegaNavigation.storyName = 'Mega-dropdown navigation';
