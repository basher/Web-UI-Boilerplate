const style = `
<style>
    .flex > * {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
        padding: 1rem;
    }
</style>
`;

export const FlexHtml = (args) => `
${style}
<div class="flex
    ${args.growAllFlexItems === true ? 'flex--grow-all' : ''}
    ${args.direction === undefined ? '' : `flex--${args.direction}`}
    ${args.gap === undefined ? '' : `flex--${args.gap}`}
    ${args.alignItems === undefined ? '' : `flex--${args.alignItems}`}
    ${args.justifyContent === undefined ? '' : `flex--${args.justifyContent}`}
">
    <div>Flex item 1 - lots more content<br><br>
    to demonstrate (default) equal height columns</div>
    <div>Flex item 2</div>
    <div>Flex item 3</div>
    <div>Flex item 4</div>
    <div>Flex item 5</div>
</div>
`;
