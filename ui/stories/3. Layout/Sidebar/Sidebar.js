const style = /*html*/ `
<style>
    .sidebar {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
    }
</style>
`;

export const SidebarHtml = () => /*html*/ `
${style}
<div class="sidebar-container">
    <div class="sidebar">
        Sidebar = narrow content.
    </div>
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
    </div>
</div>
`;

export const SidebarRightHtml = () => /*html*/ `
${style}
<div class="sidebar-container">
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
    </div>
    <div class="sidebar">
        Sidebar = narrow content.
    </div>
</div>
`;
