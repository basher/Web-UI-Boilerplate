export const StackHtml = (args) => /*html*/ `
<div
    class="stack"
    ${args.stackGutter === undefined ? '' : `data-stack-gutter="${args.stackGutter}"`}
>
    <div>Child item of "stack" parent...</div>
    <div>Child item of "stack" parent...</div>
    <div>Child item of "stack" parent...</div>
</div>
`;
