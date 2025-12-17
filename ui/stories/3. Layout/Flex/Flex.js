const style = /*html*/ `
<style>
    [class*='flex'] > * {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
        padding: 1rem;
    }
</style>
`;

export const FlexHtml = (args) => /*html*/ `
${style}
<div
    class="flex"
    ${args.alignItems ? `data-align="${args.alignItems}"` : ''}
    ${args.direction ? `data-direction="${args.direction}"` : ''}
    ${args.gap ? `data-flex-gap="${args.gap}"` : ''}
    ${args.growAllFlexItems ? `data-grow="${args.growAllFlexItems}"` : ''}
    ${args.justifyContent ? `data-justify="${args.justifyContent}"` : ''}
>
    <div>Flex item 1 - lots more content<br><br>
    to demonstrate (default) equal height columns</div>
    <div>Flex item 2</div>
    <div>Flex item 3</div>
    <div>Flex item 4</div>
    <div>Flex item 5</div>
</div>
`;
