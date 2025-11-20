import {
    NavigationHtml,
    HamburgerNavigationHtml,
    DisclosureNavigationHtml,
    HamburgerDisclosureNavigationHtml,
    MegaDropdownHtml
} from './Navigation';

export default {
    title: 'Components/Navigation',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['components'],
};

export const Navigation = {
    render: () => NavigationHtml(),
};

export const HamburgerNavigation = {
    render: () => HamburgerNavigationHtml(),
};

export const DisclosureNavigation = {
    render: () => DisclosureNavigationHtml(),
};
DisclosureNavigation.storyName =
    'Disclosure Navigation (With Dropdown Menus)';

export const HamburgerDisclosureNavigation = {
    render: () => HamburgerDisclosureNavigationHtml(),
};
HamburgerDisclosureNavigation.storyName =
    'Hamburger (With Disclosure Navigation)';

export const MegaDropdown = {
    render: () => MegaDropdownHtml(),
};
