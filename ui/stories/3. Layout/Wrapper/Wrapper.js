const style = `
<style>
    .sb-show-main.sb-main-padded {
        padding: 0;
    }
    [class*='wrapper']:not([class*="skin"]):not(.sbdocs-wrapper) {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
    }
</style>
`;

export const WrapperHtml = (args) => `
${style}
<div ${args.turnParentIntoStack === true ? 'class="stack"' : ''}>
    <div class="wrapper\
 ${args.paddingBlock === undefined ? '' : `u-${args.paddingBlock}`}\
 ${args.paddingInline === undefined ? '' : `u-${args.paddingInline}`}\
    ">
        Wrapper (default)
    </div>
    <div class="wrapper\
 ${args.paddingBlock === undefined ? '' : `u-${args.paddingBlock}`}\
 ${args.paddingInline === undefined ? '' : `u-${args.paddingInline}`}\
 ${args.skin === undefined ? '' : `${args.skin}`}\
    ">
        Apply a SKIN override to this wrapper
    </div>
    <div class="wrapper--s\
 ${args.paddingBlock === undefined ? '' : `u-${args.paddingBlock}`}\
 ${args.paddingInline === undefined ? '' : `u-${args.paddingInline}`}\
    ">
        Wrapper (small)
    </div>
    <div class="wrapper--l\
 ${args.paddingBlock === undefined ? '' : `u-${args.paddingBlock}`}\
 ${args.paddingInline === undefined ? '' : `u-${args.paddingInline}`}\
    ">
        Wrapper (large)
    </div>
    <div class="wrapper--fullbleed\
 ${args.paddingBlock === undefined ? '' : `u-${args.paddingBlock}`}\
 ${args.paddingInline === undefined ? '' : `u-${args.paddingInline}`}\
    ">
        Wrapper (fullbleed)
    </div>
    <div class="wrapper--fit-content\
 ${args.paddingBlock === undefined ? '' : `u-${args.paddingBlock}`}\
 ${args.paddingInline === undefined ? '' : `u-${args.paddingInline}`}\
    ">
        Wrapper (fit-content)
    </div>
</div>
`;
