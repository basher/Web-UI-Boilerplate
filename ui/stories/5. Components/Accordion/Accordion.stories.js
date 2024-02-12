import { AccordionHtml, AccordionCustomIconHtml } from "./Accordion";
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

export const AccordionCustomIcon = {
    render: () => AccordionCustomIconHtml(),
};
AccordionCustomIcon.storyName = 'Accordion With Custom Icon';
