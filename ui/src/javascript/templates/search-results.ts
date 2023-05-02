/**
 * @param {object} data
 * @param {string} data.url
 * @param {string} data.name
 * @returns {string}
 * */

const template = (data: Record<string, string>): string => {
    return `
        <li class="search__result">
            <a class="search__result__link" href="${data.url}">
                ${data.name}
            </a>
        </li>
    `;
};

export default template;
