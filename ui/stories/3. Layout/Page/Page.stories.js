import { PageHtml, PageSidebarHtml, PageSidebarRightHtml } from './Page';

export default {
    title: 'Layout/Page',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['layout'],
    decorators: [(story) => /*html*/ `
        <style>
            .sb-show-main.sb-main-padded {
                padding: 0;
            }

            header,
            footer {
                background: hsl(51, 100%, 45%, 15%);
                border: 1px dashed hsl(51, 100%, 45%);
            }

            .page > * {
                padding: 1rem;
            }
        </style>
        ${story()}</div>
    `],
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
