import {
    SearchHtml,
    SearchDatalistHtml,
    SearchAjaxHtml
} from './Search';

export default {
    title: 'Components/Search',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Search = {
    render: () => SearchHtml(),
};

export const SearchDatalist = {
    render: () => SearchDatalistHtml(),
};
SearchDatalist.storyName = 'Predictive Search Using Datalist';

export const SearchAjax = {
    render: () => SearchAjaxHtml(),
};
SearchAjax.storyName = 'Predictive Search Using External API';
