import {
    NavigationHtml,
    HamburgerNavigationHtml,
    DropdownNavigationHtml,
    HamburgerDropdownNavigationHtml,
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

export const DropdownNavigation = {
    render: () => DropdownNavigationHtml(),
};
DropdownNavigation.storyName =
    'Navigation With Dropdown Lists';

export const HamburgerDropdownNavigation = {
    render: () => HamburgerDropdownNavigationHtml(),
};
HamburgerDropdownNavigation.storyName =
    'Hamburger With Nested Dropdown Lists';

export const MegaDropdown = {
    render: () => MegaDropdownHtml(),
};
