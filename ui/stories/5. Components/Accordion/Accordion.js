export const AccordionHtml = () => /*html*/ `
<div class="accordion stack">
    <details>
        <summary>Accordion title 1</summary>
        <div class="accordion__content">
            Accordion 1 content - Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequatur temporibus, modi ab necessitatibus voluptatum sed harum voluptatem non sunt quidem, ut illo porro illum corporis mollitia perferendis nihil reiciendis.
        </div>
    </details>
    <details>
        <summary>Accordion title 2</summary>
        <div class="accordion__content">
            Accordion 2 content - Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
    </details>
</div>
`;

export const AccordionExclusiveHtml = () => /*html*/ `
<div class="accordion stack">
    <details name="acc1">
        <summary>Accordion title 1</summary>
        <div class="accordion__content">
            Accordion 1 content - Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequatur temporibus, modi ab necessitatibus voluptatum sed harum voluptatem non sunt quidem, ut illo porro illum corporis mollitia perferendis nihil reiciendis.
        </div>
    </details>
    <details name="acc1">
        <summary>Accordion title 2</summary>
        <div class="accordion__content">
            Accordion 2 content - Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
    </details>
</div>
`;

export const AccordionCustomIconHtml = () => /*html*/ `
<div class="accordion stack" data-accordion="custom-icon">
    <details>
        <summary>
            <svg
                aria-hidden="true"
                focusable="false"
                class="icon"
            >
                <use href="sprite.svg#down" />
            </svg>
            Accordion title 1
        </summary>
        <div class="accordion__content">
            Accordion 1 content - Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequatur temporibus, modi ab necessitatibus voluptatum sed harum voluptatem non sunt quidem, ut illo porro illum corporis mollitia perferendis nihil reiciendis.
        </div>
    </details>
    <details>
        <summary>
            <svg
                aria-hidden="true"
                focusable="false"
                class="icon"
            >
                <use href="sprite.svg#down" />
            </svg>
            Accordion title 2
        </summary>
        <div class="accordion__content">
            Accordion 2 content - Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
    </details>
</div>
`;
