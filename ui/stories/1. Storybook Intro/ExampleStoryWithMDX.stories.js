import docs from './ExampleStoryWithMDX.mdx'

export default {
    title: 'WebUI Storybook/Example stories',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
}

export const ExampleStoryWithMDX = () => `
<p>Example story has a specific <code>MDX</code> Docs page.</p>
`
ExampleStoryWithMDX.storyName = 'Example story with MDX docs'
