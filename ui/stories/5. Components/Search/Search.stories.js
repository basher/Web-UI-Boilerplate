import { SearchHtml, SearchDatalistHtml } from './Search';
import { WebUIPredictiveSearchHtml } from '../../6. Web Components Or Custom Elements/WebUI Predictive Search/WebUIPredictiveSearch';


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

export const WebUIPredictiveSearch = {
    render: () => WebUIPredictiveSearchHtml(),
};
WebUIPredictiveSearch.storyName = '<webui-predictive-search>';
