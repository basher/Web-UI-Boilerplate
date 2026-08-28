export const WrapperHtml = (args) => /*html*/ `
<div ${args.turnParentIntoStack ? 'class="stack"' : ''}>
    <div class="wrapper">
        Wrapper (default)
    </div>

    <div class="wrapper\
 ${args.skin === undefined ? '' : `${args.skin}`}\
    ">
        Apply SKIN override to this wrapper
    </div>

    <div class="wrapper\
 ${args.paddingBlock ? `${args.paddingBlock}` : ''}\
 ${args.paddingInline ? `${args.paddingInline}` : ''}\
    ">
        Apply PADDING override to this wrapper
    </div>

    <div class="wrapper" data-wrapper="small">
        Wrapper (small)
    </div>

    <div class="wrapper" data-wrapper="large">
        Wrapper (large)
    </div>

    <div class="wrapper" data-wrapper="fullbleed">
        Wrapper (fullbleed)
    </div>

    <div class="wrapper" data-wrapper="fit-content">
        Wrapper (fit-content)
    </div>
</div>
`;
