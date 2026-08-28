import { HomepageHtml } from './Homepage';

export default {
    title: 'Pages/Homepage',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['pages'],
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
        </style>
        ${story()}
    `],
};

export const Homepage = {
    render: () => HomepageHtml(),
};
