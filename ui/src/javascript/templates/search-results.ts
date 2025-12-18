/**
 * @param {object} data - Array of matched search terms
 * @returns {string}
 * */

const template = (data: []): string => {
    const resultTemplate = data.map((result: Record<string, string>) => {
        return `
            <option value="${result.name} = ${result.url}">
                ${result.name}
            </option>
        `;
    });

    return `${resultTemplate.join('')}`;
};

export default template;
