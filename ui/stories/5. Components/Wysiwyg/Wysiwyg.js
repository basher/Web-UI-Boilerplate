export const WysiwygHtml = () => `
<div class="wysiwyg stack" data-module="wysiwyg">
    <h2>Heading level 2</h2>
    <p>Example of real prose content in a stack.</p>
    <p>Example of <a href="#">inline link</a>.</p>

    <img
        src="https://dummyimage.com/400x300"
        alt="[alt]"
        loading="lazy"
        height="300"
        width="400"
    />

    <h2>Heading level 2</h2>
    <h3>Heading level 3</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

    <h3>Heading level 3</h3>
    <h4>Heading level 4</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

    <p><small>Smallprint...</small></p>

    <ul>
        <li>Unordered list item</li>
        <li>Unordered list item</li>
        <li>Unordered list item
            <ul>
                <li>Nested unordered list item</li>
                <li>Nested unordered list item</li>
                <li>Nested unordered list item</li>
            </ul>
        </li>
    </ul>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

    <h3>Table</h3>
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
