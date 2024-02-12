const style = `
<style>
    .sb-show-main.sb-main-padded {
        padding: 0;
    }
    .wrapper:not([class*="skin"]) {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
    }
</style>
`;

export const WrapperHtml = (args) => `
${style}
<div ${args.turnParentIntoStack === true ? 'class="stack"' : ''}>
    <div class="wrapper
        u-${args.paddingBlock}
        u-${args.paddingInline}
    ">
        Wrapper (default)
    </div>
    <div class="wrapper
        u-${args.paddingBlock}
        u-${args.paddingInline}
        ${args.skin}
    ">
        Apply a SKIN override to this wrapper
    </div>
    <div class="wrapper wrapper--s
        u-${args.paddingBlock}
        u-${args.paddingInline}
    ">
        Wrapper "S"
    </div>
    <div class="wrapper wrapper--l
        u-${args.paddingBlock}
        u-${args.paddingInline}
    ">
        Wrapper "L""
    </div>
    <div class="wrapper wrapper--fullbleed
        u-${args.paddingBlock}
        u-${args.paddingInline}
    ">
        Wrapper fullbleed
    </div>
    <div class="wrapper wrapper--fit-content
        u-${args.paddingBlock}
        u-${args.paddingInline}
    ">
        Wrapper fit-content
    </div>
</div>
`;
