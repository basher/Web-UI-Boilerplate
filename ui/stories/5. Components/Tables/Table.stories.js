import { TableHtml, ResponsiveTableHtml } from './Table';

export default {
    title: 'Components/Tables',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Table = {
    render: () => TableHtml(),
};

export const ResponsiveTable = {
    render: () => ResponsiveTableHtml(),
};
