export const NavigationHtml = () => /*html*/ `
<nav
    class="nav"
    id="navigation"
    aria-label="Primary"
>
    <ul class="nav__list flex">
        <li>
            <a href="#">Nav link</a>
        </li>
        <li>
            <a href="#" aria-current="page">Nav link = current page</a>
        </li>
        <li>
            <a href="#">Nav link</a>
        </li>
        <li>
            <a href="#">Nav link</a>
        </li>
        <li>
            <a href="#">Nav link</a>
        </li>
    </ul>
</nav>
`;

export const HamburgerNavigationHtml = () => /*html*/ `
<nav
    class="nav"
    data-nav="hamburger"
    id="navigation"
    aria-label="Primary"
>
    <webui-popover
        data-bind-escape-key
        data-bind-click-outside
    >
        <button
            type="button"
            class="button nav__hamburger-button"
            data-button="icon"
            aria-haspopup="menu"
            popovertarget="hamburger"
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
            <span class="visually-hidden">Menu</span>
        </button>

        <ul
            class="nav__list flex"
            id="hamburger"
            popover
        >
            <li>
                <a href="#">Nav link</a>
            </li>
            <li>
                <a href="#" aria-current="page">Nav link = current page</a>
            </li>
            <li>
                <a href="#">Nav link</a>
            </li>
            <li>
                <a href="#">Nav link</a>
            </li>
        </ul>
    </webui-popover>
</nav>

<br/>
<p>Some content below the navigation, to test the CSS positioning & stacking context of the navigation when it is shown.</p>
`;

export const DropdownNavigationHtml = () => /*html*/ `
<nav
    class="nav"
    data-nav="dropdown"
    id="navigation"
    aria-label="Primary"
>
    <ul class="nav__list flex">
        <li data-nav-item-dropdown>
            <a href="#">Nav link with dropdown</a>

            <webui-disclosure
                data-bind-escape-key
                data-bind-click-outside
            >
                <button
                    type="button"
                    class="button"
                    data-button="icon"
                    data-trigger
                    hidden
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        class="icon"
                    >
                        <use href="sprite.svg#down" />
                    </svg>
                    <span class="visually-hidden">[Nav link] dropdown</span>
                </button>

                <ul
                    class="nav__list flex"
                    data-nav-list-dropdown
                    data-content
                >
                    <li>
                        <a href="#">Nested nav link</a>
                    </li>
                    <li>
                        <a href="#">Nested nav link with longer name</a>
                    </li>
                    <li>
                        <a href="#">Nested nav link</a>
                    </li>
                    <li>
                        <a href="#">Nested nav link</a>
                    </li>
                </ul>
            </webui-disclosure>
        </li>

        <li>
            <a href="#" aria-current="page">Nav link = current page</a>
        </li>
        <li>
            <a href="#">Nav link</a>
        </li>

        <li data-nav-item-dropdown>
            <a href="#">Nav link with dropdown</a>

            <webui-disclosure
                data-bind-escape-key
                data-bind-click-outside
            >
                <button
                    type="button"
                    class="button"
                    data-button="icon"
                    data-trigger
                    hidden
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        class="icon"
                    >
                        <use href="sprite.svg#down" />
                    </svg>
                    <span class="visually-hidden">[Nav link] dropdown</span>
                </button>

                <ul
                    class="nav__list flex"
                    data-nav-list-dropdown
                    data-content
                >
                    <li>
                        <a href="#">Nested nav link</a>
                    </li>
                    <li>
                        <a href="#">Nested nav link with longer name</a>
                    </li>
                    <li>
                        <a href="#">Nested nav link</a>
                    </li>
                    <li>
                        <a href="#">Nested nav link</a>
                    </li>
                </ul>
            </webui-disclosure>
        </li>

        <li>
            <a href="#">Nav link</a>
        </li>
    </ul>
</nav>

<br/>
<p>Some content below the navigation, to test the CSS positioning & stacking context of the navigation dropdowns when they are shown.</p>
`;

export const HamburgerDropdownNavigationHtml = () => /*html*/ `
<nav
    class="nav"
    data-nav="hamburger-dropdown"
    id="navigation"
    aria-label="Primary"
>
    <webui-popover
        data-bind-escape-key
        data-bind-click-outside
    >
        <button
            type="button"
            class="button nav__hamburger-button"
            data-button="icon"
            aria-haspopup="menu"
            popovertarget="hamburger"
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
            <span class="visually-hidden">Menu</span>
        </button>

        <ul
            class="nav__list flex"
            id="hamburger"
            popover
        >
            <li data-nav-item-dropdown>
                <a href="#">Nav link with dropdown</a>

                <webui-disclosure
                    data-bind-escape-key
                    data-bind-click-outside
                >
                    <button
                        type="button"
                        class="button"
                        data-button="icon"
                        data-trigger
                        hidden
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="icon"
                        >
                            <use href="sprite.svg#down" />
                        </svg>
                        <span class="visually-hidden">[Nav link] dropdown</span>
                    </button>

                    <ul
                        class="nav__list flex"
                        data-nav-list-dropdown
                        data-content
                    >
                        <li>
                            <a href="#">Nested nav link</a>
                        </li>
                        <li>
                            <a href="#">Nested nav link with longer name</a>
                        </li>
                        <li>
                            <a href="#">Nested nav link</a>
                        </li>
                        <li>
                            <a href="#">Nested nav link</a>
                        </li>
                    </ul>
                </webui-disclosure>
            </li>

            <li>
                <a href="#" aria-current="page">Nav link = current page</a>
            </li>
            <li>
                <a href="#">Nav link</a>
            </li>

            <li data-nav-item-dropdown>
                <a href="#">Nav link with dropdown</a>

                <webui-disclosure
                    data-bind-escape-key
                    data-bind-click-outside
                >
                    <button
                        type="button"
                        class="button"
                        data-button="icon"
                        data-trigger
                        hidden
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="icon"
                        >
                            <use href="sprite.svg#down" />
                        </svg>
                        <span class="visually-hidden">[Nav link] dropdown</span>
                    </button>

                    <ul
                        class="nav__list flex"
                        data-nav-list-dropdown
                        data-content
                    >
                        <li>
                            <a href="#">Nested nav link</a>
                        </li>
                        <li>
                            <a href="#">Nested nav link with longer name</a>
                        </li>
                        <li>
                            <a href="#">Nested nav link</a>
                        </li>
                        <li>
                            <a href="#">Nested nav link</a>
                        </li>
                    </ul>
                </webui-disclosure>
            </li>

            <li>
                <a href="#">Nav link</a>
            </li>
        </ul>
    </webui-popover>
</nav>

<br/>
<p>Some content below the navigation, to test the CSS positioning & stacking context of the navigation when it is shown.</p>
`;

export const MegaDropdownHtml = () => /*html*/ `
TODO...
`;
