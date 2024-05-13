/**
 * @param {object} data - Array of matched search terms
 * @returns {string}
 * */

const template = (data: []): string => {
    const resultSummary =
        data.length > 1
            ? `There are ${data.length} results.`
            : 'There is 1 result.';

    const resultTemplate = data.map((result: Record<string, string>) => {
        return `
                <li class="search__result">
                    <a class="search__result__link" href="${result.url}">
                        ${result.name}
                    </a>
                </li>
            `;
    });

    return `
        <p>${resultSummary}</p>
        <ul class="grid">
            ${resultTemplate.join('')}
        </ul>
    `;
};

export default template;
