import docs from './Icons.mdx'

export default {
    title: 'Design System/Icons',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        iconSize: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
    },
}

const style = `
<style>
    .grid {
        grid-template-columns: repeat(auto-fit, 50px);
    }
</style>
`

export const Icons = (args) => `
${style}
<div class="grid">
<svg
    role="img"
    focusable="false"
    class="icon icon--${args.iconSize}"
>
    <title>chevron down</title>
    <use href="/sprite.svg#chevron-down" />
</svg>

<svg
    role="img"
    focusable="false"
    class="icon icon--${args.iconSize}"
>
    <title>chevron left</title>
    <use href="/sprite.svg#chevron-left" />
</svg>

<svg
    role="img"
    focusable="false"
    class="icon icon--${args.iconSize}"
>
    <title>chevron right</title>
    <use href="/sprite.svg#chevron-right" />
</svg>

<svg
    role="img"
    focusable="false"
    class="icon icon--${args.iconSize}"
>
    <title>chevron up</title>
    <use href="/sprite.svg#chevron-up" />
</svg>

<svg
    role="img"
    focusable="false"
    class="icon icon--${args.iconSize}"
>
    <title>chevron up</title>
    <use href="/sprite.svg#close" />
</svg>

<svg
    role="img"
    focusable="false"
    class="icon icon--${args.iconSize}"
>
    <title>chevron up</title>
    <use href="/sprite.svg#hamburger" />
</svg>
</div>
`
