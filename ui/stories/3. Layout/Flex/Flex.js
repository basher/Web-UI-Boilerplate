export const FlexHtml = (args) => /*html*/ `
<div
    class="flex"
    ${args.alignItems ? `data-flex-align="${args.alignItems}"` : ''}
    ${args.direction ? `data-flex-direction="${args.direction}"` : ''}
    ${args.gap ? `data-flex-gap="${args.gap}"` : ''}
    ${args.growAllFlexItems ? `data-flex-grow="${args.growAllFlexItems}"` : ''}
    ${args.justifyContent ? `data-flex-justify="${args.justifyContent}"` : ''}
>
    <div>Flex item 1 - lots more content<br><br>
    to demonstrate (default) equal height columns</div>
    <div>Flex item 2</div>
    <div>Flex item 3</div>
    <div>Flex item 4</div>
    <div>Flex item 5</div>
</div>
`;
