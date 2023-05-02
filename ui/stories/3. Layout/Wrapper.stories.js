import docs from './Wrapper.mdx'

export default {
    title: 'Layout/Wrapper',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        turnParentIntoStack: { control: 'boolean' },
        paddingBlock: {
            control: {
                type: 'select',
                options: ['p-block--xs', 'p-block--s', 'p-block--m', 'p-block--l', 'p-block--xl'],
            },
        },
        paddingInline: {
            control: {
                type: 'select',
                options: ['p-inline--xs', 'p-inline--s', 'p-inline--m', 'p-inline--l', 'p-inline--xl'],
            },
        },
        skin: {
            control: {
                type: 'select',
                options: ['skin-1', 'skin-2', 'skin-3'],
            },
        },
    },
}

const style = `
<style>
    .sb-show-main.sb-main-padded {
        padding: 0;
    }
    .wrapper:not([class*="skin"]) {
        background: rgba(235, 201, 90, 0.2);
        border: 1px dashed rgb(235, 201, 90);
    }
</style>
`

export const Wrapper = (args) => `
${style}
<div ${args.turnParentIntoStack === true ? 'class="stack"' : ''}>
    <div class="wrapper
        u-${args.paddingBlock}
        u-${args.paddingInline}
    ">
        Wrapper (default)
    </div>
    <div class="wrapper ${args.skin}">
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
`
