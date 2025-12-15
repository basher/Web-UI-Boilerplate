/**
 * @param {object} data - Array of matched search terms
 * @returns {string}
 * */

const template = (data: []): string => {
    const resultTemplate = data.map((result: Record<string, string>) => {
        return `
                <li>
                    <a href="${result.url}">
                        ${result.name}
                    </a>
                </li>
            `;
    });

    return `
        <ul class="grid">
            ${resultTemplate.join('')}
        </ul>
    `;
};

export default template;
