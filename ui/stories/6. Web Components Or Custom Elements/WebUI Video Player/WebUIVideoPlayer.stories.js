import { WebUIVideoPlayerHtml } from './WebUIVideoPlayer';
export default {
    title: 'Web Components Or Custom Elements/<webui-video-player>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const WebUIVideoPlayer = {
    render: () => WebUIVideoPlayerHtml(),
};
WebUIVideoPlayer.storyName = '<webui-video-player>';
