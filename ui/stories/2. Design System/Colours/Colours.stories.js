export default {
    title: 'Design System/Colours',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    loaders: [
        () =>
            fetch('exported-colors.json')
                .then((r) => r.json())
                .then((json) => json),
    ],
};

const style = `
<style>
    /* Hides the 1st empty auto-generated output from 'exported-colors.json'. */
    .stack h2:first-of-type,
    .grid:first-of-type {
        display: none;
    }

    .grid {
        grid-template-columns: repeat(auto-fit, 12.5rem);
    }
    .grid li {
        border: 1px solid;
        border-radius: 0.125rem;
        display: flex;
        flex-direction: column;
        font-size: 0.875rem;
        padding: 0.25rem;
    }
    .grid span {
        word-break: break-all;
    }
    .styled {
        height: 4rem;
    }
</style>
`;

export const Colours = (args, { loaded }) => `
${style}
<div class="stack">
${
    // Build story HTML from 'exported-colors.json'.
    Object.keys(loaded)
        .map(
            (section) => `
                <h2 class="h--3">
                    ${
                        section.charAt(0).toUpperCase() +
                        section.slice(1).replace(/-/g, ' ')
                    }
                </h2>
                <ul class="grid">
                    ${loaded[section]
                        .map(
                            (color) => `
                                <li>
                                    <span
                                        class="styled"
                                        style="background: ${color.compiledValue}">
                                    </span>
                                    <span>
                                        ${color.value.replace(/hsl\(/g, '').slice(0, -1)}
                                    </span>
                                    <span></span>
                                </li>
                            `,
                        )
                        .join('')}
                </ul>
            `,
        )
        .join('')
}
</div>

${
    window.addEventListener('DOMContentLoaded',
        () => {
            const styledSpan = document.querySelectorAll('.styled');
            styledSpan.forEach((span) => {
                const spanStyle = span.style.background;
                const spanStyleValue = spanStyle.substring(
                    spanStyle.indexOf('--'),
                    spanStyle.length - 2,
                );

                const computedSpan = span.nextElementSibling.nextElementSibling;
                computedSpan.innerHTML = `hsl(${getComputedStyle(
                    span,
                ).getPropertyValue(spanStyleValue)})`;
            });
        }
    )
}
`;
