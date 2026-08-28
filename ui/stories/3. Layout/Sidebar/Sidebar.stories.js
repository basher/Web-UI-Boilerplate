import { SidebarHtml, SidebarRightHtml } from './Sidebar';

export default {
    title: 'Layout/Sidebar',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['layout'],
    decorators: [(story) => /*html*/ `
        <style>
            .sidebar {
                background: hsl(51, 100%, 45%, 15%);
                border: 1px dashed hsl(51, 100%, 45%);
            }
        </style>
        ${story()}</div>
    `],
};

export const Sidebar = {
    render: () => SidebarHtml(),
};

export const SidebarRight = {
    render: () => SidebarRightHtml(),
};
SidebarRight.storyName = 'Right Sidebar';
