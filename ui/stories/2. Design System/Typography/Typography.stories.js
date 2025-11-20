import { TypographyHtml } from './Typography';

export default {
    title: 'Design System/Typography',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['design system'],
};

export const Typography = {
    render: () => TypographyHtml(),
};
