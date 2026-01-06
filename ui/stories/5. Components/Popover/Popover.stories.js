import { PopoverHtml } from './Popover';

export default {
    title: 'Components/Popover',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    tags: ['components'],
};

export const Popover = {
    render: () => PopoverHtml(),
};
