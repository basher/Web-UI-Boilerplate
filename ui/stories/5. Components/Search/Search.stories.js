import { SearchHtml, SearchDatalistHtml } from './Search';

export default {
    title: 'Components/Search',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['components'],
};

export const Search = {
    render: () => SearchHtml(),
};

export const SearchDatalist = {
    render: () => SearchDatalistHtml(),
};
SearchDatalist.storyName = 'Predictive Search Using Datalist';

export const WebUIPredictiveSearch = {
    render: () => /*html*/ `
        <p>
            See the <code>&lt;webui-predictive-search&gt;</code>
            Web Component.
        </p>
    `
};
WebUIPredictiveSearch.storyName = '<webui-predictive-search>';
