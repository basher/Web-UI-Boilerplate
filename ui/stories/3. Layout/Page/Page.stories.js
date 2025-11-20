import { PageHtml, PageSidebarHtml, PageSidebarRightHtml } from './Page';

export default {
    title: 'Layout/Page',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['layout'],
};

export const Page = {
    render: () => PageHtml(),
};

export const PageSidebar = {
    render: () => PageSidebarHtml(),
};
PageSidebar.storyName = 'Page With Sidebar';

export const PageSidebarRight = {
    render: () => PageSidebarRightHtml(),
};
PageSidebarRight.storyName = 'Page With Right Sidebar';
