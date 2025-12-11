const style = /*html*/ `
<style>
    .sb-show-main {
        background: Canvas;
    }
    .grid {
        grid-template-columns: repeat(auto-fit, 17.5rem);
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

window.addEventListener('DOMContentLoaded',
    () => {
        const styledSpan = document.querySelectorAll('.styled');
        styledSpan.forEach((span) => {
            const spanStyle = getComputedStyle(span).getPropertyValue('background-color');
            const computedSpan = span.nextElementSibling.nextElementSibling;

            if (computedSpan) {
                computedSpan.innerHTML = /*html*/ `<b>${spanStyle}</b>`;
            }
        });
    }
)

export const ColoursHtml = () => /*html*/ `
${style}
<div class="stack">
    <h2 class="h--3">Main theme colours</h2>
    <ul class="grid">
        <li>
            <span
                class="styled"
                style="background: var(--webui-color-primary-500)">
            </span>
            <span>var(--webui-color-primary-500)</span>
            <span></span>
        </li>
        <li>
            <span
                class="styled"
                style="background: var(--webui-color-primary-100)">
            </span>
            <span>var(--webui-color-primary-100)</span>
            <span></span>
        </li>
    </ul>

    <h2 class="h--3">Neutral colours</h2>
    <ul class="grid">
        <li>
            <span
                class="styled"
                style="background: var(--webui-color-neutral-900)">
            </span>
            <span>var(--webui-color-neutral-900)</span>
            <span></span>
        </li>
        <li>
            <span
                class="styled"
                style="background: var(--webui-color-neutral-700)">
            </span>
            <span>var(--webui-color-neutral-700)</span>
            <span></span>
        </li>
        <li>
            <span
                class="styled"
                style="background: var(--webui-color-neutral-500)">
            </span>
            <span>var(--webui-color-neutral-500)</span>
            <span></span>
        </li>
        <li>
            <span
                class="styled"
                style="background: var(--webui-color-neutral-300)">
            </span>
            <span>var(--webui-color-neutral-300)</span>
            <span></span>
        </li>
        <li>
            <span
                class="styled"
                style="background: var(--webui-color-neutral-100)">
            </span>
            <span>var(--webui-color-neutral-100)</span>
            <span></span>
        </li>
    </ul>

    <h2 class="h--3">Other accent colours</h2>
    <ul class="grid">
        <li>
            <span
                class="styled"
                style="background: var(--webui-color-success-500)">
            </span>
            <span>var(--webui-color-success-500)</span>
            <span></span>
        </li>
        <li>
            <span
                class="styled"
                style="background: var(--webui-color-success-100)">
            </span>
            <span>var(--webui-color-success-100)</span>
            <span></span>
        </li>
        <li>
            <span
                class="styled"
                style="background: var(--webui-color-error-500)">
            </span>
            <span>var(--webui-color-error-500)</span>
            <span></span>
        </li>
        <li>
            <span
                class="styled"
                style="background: var(--webui-color-error-100)">
            </span>
            <span>var(--webui-color-error-100)</span>
            <span></span>
        </li>
        <li>
            <span
                class="styled"
                style="background: var(--webui-color-notify-500)">
            </span>
            <span>var(--webui-color-notify-500)</span>
            <span></span>
        </li>
        <li>
            <span
                class="styled"
                style="background: var(--webui-color-notify-100)">
            </span>
            <span>var(--webui-color-notify-100)</span>
            <span></span>
        </li>
        <li>
            <span
                class="styled"
                style="background: var(--webui-color-focus-500)">
            </span>
            <span>var(--webui-color-focus-500)</span>
            <span></span>
        </li>
        <li>
            <span
                class="styled"
                style="background: var(--webui-color-focus-100)">
            </span>
            <span>var(--webui-color-focus-100)</span>
            <span></span>
        </li>
    </ul>
</div>
`;
