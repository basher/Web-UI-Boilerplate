import { BreadcrumbHtml } from './Breadcrumb';

export default {
    title: 'Components/Breadcrumb',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Breadcrumb = {
    render: () => BreadcrumbHtml(),
};
