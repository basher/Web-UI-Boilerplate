import { HomepageHtml } from './Homepage';

export default {
    title: 'Pages/Homepage',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Homepage = {
    render: () => HomepageHtml(),
};
