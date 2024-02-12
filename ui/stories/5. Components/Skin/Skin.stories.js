import { SkinHtml, SkinWrapperHtml } from './Skin';

export default {
    title: 'Components/Skin',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        skin: {
            control: 'select',
            options: ['skin-1', 'skin-2', 'skin-3'],
        },
    },
};

export const Skin = {
    render: (args) => SkinHtml(args),
};

export const SkinWrapper = {
    render: (args) => SkinWrapperHtml(args),
};
SkinWrapper.storyName = 'Skin Applied To Wrapper Layout';
