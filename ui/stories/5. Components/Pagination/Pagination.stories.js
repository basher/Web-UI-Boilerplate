import { PaginationHtml } from './Pagination';

export default {
    title: 'Components/Pagination',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['components'],
};

export const Pagination = {
    render: () => PaginationHtml(),
};
