import { ShareHtml, ShareAnotherUrlHtml } from './Share';

export default {
    title: 'Components/Share',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Share = {
    render: () => ShareHtml(),
};

export const ShareAnotherUrl = {
    render: () => ShareAnotherUrlHtml(),
};
ShareAnotherUrl.storyName = 'Share Another URL';
