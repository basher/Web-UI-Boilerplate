import { AjaxSpinnerHtml, AjaxFetchHtml } from './Ajax';

export default {
    title: 'Components/Ajax',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const AjaxSpinner = {
    render: () => AjaxSpinnerHtml(),
};

export const AjaxFetch = {
    render: () => AjaxFetchHtml(),
};
