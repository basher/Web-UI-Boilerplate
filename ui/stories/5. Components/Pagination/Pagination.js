export const PaginationHtml = () => `
<nav class="pagination" aria-label="Pagination">
    <ul class="pagination__list flex">
        <li class="pagination__item">
            <a class="button button--text button--small" href="#" aria-disabled="true" tabindex="-1">Previous</a>
        </li>
        <li class="pagination__item">
            <a class="button button--text button--small" href="#" aria-current="page">1</a>
        </li>
        <li class="pagination__item">
            <a class="button button--text button--small" href="#">2</a>
        </li>
        <li class="pagination__item">
            <a class="button button--text button--small" href="#">3</a>
        </li>
        <li class="pagination__item">
            <a class="button button--text button--small" href="#">4</a>
        </li>
        <li class="pagination__item">
            <a class="button button--text button--small" href="#">5</a>
        </li>
        <li class="pagination__item">&hellip;</li>
        <li class="pagination__item">
            <a class="button button--text button--small" href="#">10</a>
        </li>
        <li class="pagination__item">
            <a class="button button--text button--small" href="#">Next</a>
        </li>
    </ul>
</nav>
`;
