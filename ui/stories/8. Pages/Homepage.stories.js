import { HomepageHtml } from './Homepage';

export default {
    title: 'Pages/Homepage',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['pages'],
};

export const Homepage = {
    render: () => HomepageHtml(),
};
