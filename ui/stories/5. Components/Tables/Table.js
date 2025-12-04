export const TableHtml = () => /*html*/ `
<table class="table">
    <caption>Meaningful <code>&lt;caption&gt;</code></caption>
    <thead>
        <tr>
            <th scope="col">Col heading</th>
            <th scope="col">Col heading</th>
            <th scope="col">Col heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Row heading</th>
            <td>Table cell content...</td>
            <td>Table cell content...</td>
        </tr>
        <tr>
            <th scope="row">Row heading</th>
            <td>Table cell content...</td>
            <td>Table cell content...</td>
        </tr>
        <tr>
            <th scope="row">Row heading</th>
            <td>Table cell content...</td>
            <td>Table cell content...</td>
        </tr>
    </tbody>
</table>
`;

export const ResponsiveTableHtml = () => /*html*/ `
<div
    class="table-container"
    role="region"
    tabindex="0"
    aria-labelledby="caption"
>
    <table class="table">
        <caption id="caption">Meaningful <code>&lt;caption&gt;</code></caption>
        <thead>
            <tr>
                <th scope="col">Col heading</th>
                <th scope="col">Col heading</th>
                <th scope="col">Col heading</th>
                <th scope="col">Col heading</th>
                <th scope="col">Col heading</th>
                <th scope="col">Col heading</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Row heading</th>
                <td>Table cell with lots more content thisisaverylongword...</td>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
            </tr>
            <tr>
                <th scope="row">Row heading</th>
                <td>Table cell with lots more content thisisaverylongword...</td>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
            </tr>
            <tr>
                <th scope="row">Row heading</th>
                <td>Table cell with lots more content thisisaverylongword...</td>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
            </tr>
        </tbody>
    </table>
</div>
`;
