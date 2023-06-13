/* eslint-disable @typescript-eslint/explicit-function-return-type */
import domready from 'domready';
import docs from './Colours.mdx';

export default {
    title: 'Design System/Colours',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
    loaders: [
        () =>
            fetch(process.env.STORYBOOK_EXPORTED_COLORS)
                .then((r) => r.json())
                .then((json) => json),
    ],
};

const style = `
<style>
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
                <h2>
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
                                        ${color.name}
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
${
    // Output computed RGB colours.
    domready(function () {
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
    })
}
</div>
`;
