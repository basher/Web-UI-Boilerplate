/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Accordion.mdx';

export default {
    title: 'Components/Accordion',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
};

export const Accordion = () => `
<div class="accordion">
    <details class="accordion__details">
        <summary class="accordion__summary">Accordion title 1</summary>
        <div class="accordion__copy">
            Accordion 1 content - Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequatur temporibus, modi ab necessitatibus voluptatum sed harum voluptatem non sunt quidem, ut illo porro illum corporis mollitia perferendis nihil reiciendis.
        </div>
    </details>
    <details class="accordion__details">
        <summary class="accordion__summary">Accordion title 2</summary>
        <div class="accordion__copy">
            Accordion 2 content - Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
    </details>
</div>
`;

export const AccordionCustomIcon = () => `
<div class="accordion accordion--custom-icon">
    <details class="accordion__details">
        <summary class="accordion__summary">
            Accordion title 1

            <svg
                aria-hidden="true"
                focusable="false"
                class="icon"
            >
                <use href="/sprite.svg#down" />
            </svg>
        </summary>
        <div class="accordion__copy">
            Accordion 1 content - Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequatur temporibus, modi ab necessitatibus voluptatum sed harum voluptatem non sunt quidem, ut illo porro illum corporis mollitia perferendis nihil reiciendis.
        </div>
    </details>
    <details class="accordion__details">
        <summary class="accordion__summary">
            Accordion title 2

            <svg
                aria-hidden="true"
                focusable="false"
                class="icon"
            >
                <use href="/sprite.svg#down" />
            </svg>
        </summary>
        <div class="accordion__copy">
            Accordion 2 content - Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
    </details>
</div>
`;
AccordionCustomIcon.storyName = 'Accordion with custom icon';
