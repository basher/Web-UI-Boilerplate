const style = /*html*/ `
<style>
    .stack > * {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
    }
</style>
`;

export const StackHtml = (args) => /*html*/ `
${style}
<div
    class="stack"
    ${args.stackGutter === undefined ? '' : `data-stack-gutter="${args.stackGutter}"`}
>
    <div>Child item of "stack" parent...</div>
    <div>Child item of "stack" parent...</div>
    <div>Child item of "stack" parent...</div>
</div>
`;
