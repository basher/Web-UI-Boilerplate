import { BreadcrumbHtml } from './Breadcrumb';

export default {
    title: 'Components/Breadcrumb',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['components'],
};

export const Breadcrumb = {
    render: () => BreadcrumbHtml(),
};
