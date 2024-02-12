import { SidebarHtml, SidebarRightHtml } from './Sidebar';

export default {
    title: 'Layout/Sidebar',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Sidebar = {
    render: () => SidebarHtml(),
};

export const SidebarRight = {
    render: () => SidebarRightHtml(),
};
SidebarRight.storyName = 'Right Sidebar';
