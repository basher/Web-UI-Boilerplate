import {
    GridHtml,
    GridListHtml,
    Grid2EqualColsHtml,
    Grid3EqualColsHtml,
    GridAsymmetricHtml
} from './Grid';

export default {
    title: 'Layout/Grid',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    tags: ['layout'],
    argTypes: {
        gap: {
            control: 'select',
            options: ['no-gap', 'xsmall', 'small', 'large', 'xlarge'],
            description: 'Grid gap.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'medium' }
            },
        },
    },
};

export const Grid = {
    render: (args) => GridHtml(args),
};

export const GridList = {
    render: (args) => GridListHtml(args),
};
GridList.storyName = 'Grid Using Unordered List';

export const Grid2EqualCols = {
    render: (args) => Grid2EqualColsHtml(args),
};
Grid2EqualCols.storyName = 'Equal 2-Column Grid';

export const Grid3EqualCols = {
    render: (args) => Grid3EqualColsHtml(args),
};
Grid3EqualCols.storyName = 'Equal 3-Column Grid';

export const GridAsymmetric = {
    render: (args) => GridAsymmetricHtml(args),
};
GridAsymmetric.storyName = 'Asymmetric 2-Column Grids';
