import { AccordionHtml, AccordionExclusiveHtml, AccordionCustomIconHtml } from './Accordion';
export default {
    title: 'Components/Accordion',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Accordion = {
    render: () => AccordionHtml(),
};

export const AccordionExclusive = {
    render: () => AccordionExclusiveHtml(),
};
AccordionExclusive.storyName = 'Exclusive Accordion';

export const AccordionCustomIcon = {
    render: () => AccordionCustomIconHtml(),
};
AccordionCustomIcon.storyName = 'Accordion With Custom Icon';
