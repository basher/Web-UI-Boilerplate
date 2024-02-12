export const NavigationHtml = () => `
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

export const HamburgerNavigationHtml = () => `
<nav
    class="nav nav--hamburger"
    id="navigation"
    aria-label="Primary"
    data-module="disclosure"
    data-disclosure-escape-key
    data-disclosure-click-outside
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
            <use href="sprite.svg#hamburger" />
        </svg>
        <svg
            aria-hidden="true"
            focusable="false"
            class="icon"
        >
            <use href="sprite.svg#close" />
        </svg>
        <span class="sr-only">Toggle menu</span>
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

export const DisclosureNavigationHtml = () => `
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
            data-disclosure-click-outside
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
                    <use href="sprite.svg#down" />
                </svg>
                <span class="sr-only">[Nav link] dropdown</span>
            </button>

            <ul
                class="nav__list nav__list--dropdown u-hidden"
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
            data-disclosure-click-outside
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
                    <use href="sprite.svg#down" />
                </svg>
                <span class="sr-only">[Nav link] dropdown</span>
            </button>

            <ul
                class="nav__list nav__list--dropdown u-hidden"
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

export const HamburgerDisclosureNavigationHtml = () => `
<nav
    class="nav nav--hamburger nav--disclosure"
    id="navigation"
    aria-label="Primary"
    data-module="disclosure"
    data-disclosure-escape-key
    data-disclosure-click-outside
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
            <use href="sprite.svg#hamburger" />
        </svg>
        <svg
            aria-hidden="true"
            focusable="false"
            class="icon"
        >
            <use href="sprite.svg#close" />
        </svg>
        <span class="sr-only">Toggle menu</span>
    </button>

    <ul
        class="nav__list"
        data-disclosure-content
    >
        <li
            class="nav__item nav__item--has-dropdown"
            data-module="disclosure"
            data-disclosure-escape-key
            data-disclosure-click-outside
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
                    <use href="sprite.svg#down" />
                </svg>
                <span class="sr-only">[Nav link] dropdown</span>
            </button>

            <ul
                class="nav__list nav__list--dropdown u-hidden"
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
            data-disclosure-click-outside
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
                    <use href="sprite.svg#down" />
                </svg>
                <span class="sr-only">[Nav link] dropdown</span>
            </button>

            <ul
                class="nav__list nav__list--dropdown u-hidden"
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

export const MegaDropdownHtml = () => `
TODO...
`;
