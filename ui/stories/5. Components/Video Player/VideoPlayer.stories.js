import { VideoPlayerHtml } from './VideoPlayer';
export default {
    title: 'Components/Video Player',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const VideoPlayer = {
    render: () => VideoPlayerHtml(),
};
