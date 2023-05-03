/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Sidebar.mdx';

export default {
    title: 'Layout/Sidebar',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
};

const style = `
<style>
    .sidebar {
        background: rgba(235, 201, 90, 0.2);
    }
</style>
`;

export const Sidebar = () => `
${style}
<div class="sidebar-wrapper">
    <div class="sidebar">
        Sidebar = narrow content.
    </div>
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
    </div>
</div>
`;

export const SidebarRight = () => `
${style}
<div class="sidebar-wrapper">
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
    </div>
    <div class="sidebar">
        Sidebar = narrow content.
    </div>
</div>
`;
SidebarRight.storyName = 'Right sidebar';
