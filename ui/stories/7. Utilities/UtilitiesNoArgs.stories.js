import {
    ScreenReaderHtml,
    HideContentHtml,
    CenterContentHtml
} from './Utilities';

export default {
    title: 'Utilities/Helpers and Utilities',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const ScreenReader = {
    render: () => ScreenReaderHtml(),
};
ScreenReader.storyName = 'Screen Reader Only Content';

export const HideContent = {
    render: () => HideContentHtml(),
};

export const CenterContent = {
    render: () => CenterContentHtml(),
};
