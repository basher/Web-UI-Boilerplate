import { DateOfBirthHtml } from './DateOfBirth';

export default {
    title: 'Forms/Date Of Birth',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['forms'],
};

export const DateOfBirth = {
    render: () => DateOfBirthHtml(),
};

