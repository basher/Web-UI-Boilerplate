/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Skin.mdx';

export default {
    title: 'Components/Skin',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        skin: {
            control: {
                type: 'select',
                options: ['skin-1', 'skin-2', 'skin-3'],
            },
        },
    },
};

export const Skin = (args) => `
<div class="${args.skin}">
    <p>Skin component allows us to add a <i>&quot;skin&quot;</i> or theming layer to components. For example:<p>
    <ul>
        <li>Background &amp; foreground colours</li>
        <li>Borders &amp; shadows</li>
        <li>Padding</li>
        <li>Text alignment</li>
    </ul>
</div>
`;

export const SkinWrapper = (args) => `
<div class="wrapper ${args.skin}">
<p>Skin component allows us to add a <i>&quot;skin&quot;</i> or theming layer to components.</p>
<p>Wrapper (default)</p>
</div>
`;
SkinWrapper.storyName = 'Skin applied to wrapper layout';
