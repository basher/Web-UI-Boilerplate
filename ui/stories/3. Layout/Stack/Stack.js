const style = `
<style>
    .stack > * {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
    }
</style>
`;

export const StackHtml = (args) => `
${style}
<div class="stack\
 ${args.stackGutter === undefined ? '' : `stack--${args.stackGutter}`}">
    <div>Child item of "stack" parent...</div>
    <div>Child item of "stack" parent...</div>
    <div>Child item of "stack" parent...</div>
</div>
`;
