import { PaginationHtml } from './Pagination';

export default {
    title: 'Components/Pagination',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Pagination = {
    render: () => PaginationHtml(),
};
