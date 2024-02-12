import {
    ScreenReaderHtml,
    HideContentHtml,
    CenterContentHtml
} from './Utilities';

export default {
    title: 'Utilities/Helpers and utilities',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const ScreenReader = {
    render: (args) => ScreenReaderHtml(args),
};
ScreenReader.storyName = 'Screen Reader Only Content';

export const HideContent = {
    render: (args) => HideContentHtml(args),
};
HideContent.storyName = 'Hide Content';

export const CenterContent = {
    render: (args) => CenterContentHtml(args),
};
CenterContent.storyName = 'Center Content';
