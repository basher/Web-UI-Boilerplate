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
<nav class="nav" aria-label="Primary">
    <ul class="nav__list">
        <li class="nav__item">
            <a class="nav__link" href="#">Nav link</a>
        </li>
        <li class="nav__item">
            <a class="nav__link" href="#" aria-current="page">Current page</a>
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
TODO: hamburger...
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
