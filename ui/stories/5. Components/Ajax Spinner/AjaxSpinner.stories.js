import { AjaxSpinnerHtml } from './AjaxSpinner';

export default {
    title: 'Components/Ajax Spinner',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const AjaxSpinner = {
    render: () => AjaxSpinnerHtml(),
};
