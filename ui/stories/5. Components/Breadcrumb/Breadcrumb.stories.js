import docs from './Breadcrumb.mdx'

export default {
    title: 'Components/Breadcrumb',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },

}

export const Breadcrumb = () => `
<nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb__list">
        <li class="breadcrumb__item">
            <a class="breadcrumb__link" href="#">Home</a>
        </li>
        <li class="breadcrumb__item">
            <a class="breadcrumb__link" href="#">Parent</a>
        </li>
        <li class="breadcrumb__item">
            <a class="breadcrumb__link" href="#">Parent</a>
        </li>
        <li class="breadcrumb__item">
            <a class="breadcrumb__link" href="#" aria-current="page">Current page</a>
        </li>
    </ol>
</nav>
`;
