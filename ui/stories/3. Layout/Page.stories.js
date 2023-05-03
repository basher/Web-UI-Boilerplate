/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Page.mdx';

export default {
    title: 'Layout/Page',
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
    .sb-show-main.sb-main-padded {
        padding: 0;
    }

    header,
    footer {
        background: rgba(235, 201, 90, 0.2);
    }

    .page > * {
        padding: 1rem;
    }
</style>
`;

export const Page = () => `
${style}
<div class="page">
    <header class="header">
        Page <code>&lt;header&gt;</code>.<br>
        Probably contains primary <code>&lt;nav&gt;</code>, search form, logo, skiplinks, etc.
    </header>
    <main class="main">
        Page content must be inside a <code>&lt;main&gt;</code> element.
    </main>
    <footer class="footer">
        Page <code>&lt;footer&gt;</code>.<br>
        Probably contains additional <code>&lt;nav&gt;</code>.
    </footer>
</div>
`;

export const PageSidebar = () => `
${style}
<div class="page">
    <header>
        Header.
    </header>
    <main>
        <div class="sidebar-wrapper page__sidebar">
            <div class="sidebar">
                Sidebar.<br>
                Can be an <code>&lt;aside&gt;</code>, depending on context and semantics.
            </div>
            <div>
                Content.
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
            </div>
        </div>
    </main>
    <footer>
        Footer.
    </footer>
</div>
`;
PageSidebar.storyName = 'Page with sidebar';

export const PageSidebarRight = () => `
${style}
<div class="page">
    <header>
        Header.
    </header>
    <main>
        <div class="sidebar-wrapper page__sidebar">
            <div>
                Content.
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
            </div>
            <div class="sidebar">
                Sidebar.<br>
                Can be an <code>&lt;aside&gt;</code>, depending on context and semantics.
            </div>
        </div>
    </main>
    <footer>
        Footer.
    </footer>
</div>
`;
PageSidebarRight.storyName = 'Page with right sidebar';
