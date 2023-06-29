/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Tables.mdx';

export default {
    title: 'Components/Tables',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
};

export const Table = () => `
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

export const TableResponsive = () => `
<div
    class="table-wrapper"
    role="region"
    tabindex="0"
>
    <table class="table">
        <caption>Meaningful <code>&lt;caption&gt;</code></caption>
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
TableResponsive.storyName = 'Responsive table';
