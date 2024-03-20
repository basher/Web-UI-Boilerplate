import { DateOfBirthHtml } from './DateOfBirth';

export default {
    title: 'Forms/Date Of Birth',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const DateOfBirth = {
    render: () => DateOfBirthHtml(),
};

