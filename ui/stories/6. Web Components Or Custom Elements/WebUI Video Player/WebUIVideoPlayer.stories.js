import { WebUIVideoPlayerHtml } from './WebUIVideoPlayer';
export default {
    title: 'Web Components Or Custom Elements/<webui-video-player>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['web components'],
};

export const WebUIVideoPlayer = {
    render: () => WebUIVideoPlayerHtml(),
};
WebUIVideoPlayer.storyName = '<webui-video-player>';
