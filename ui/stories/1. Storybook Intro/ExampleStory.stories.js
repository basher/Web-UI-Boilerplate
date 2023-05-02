export default {
    title: 'WebUI Storybook/Example stories',
    parameters: {
        status: {
            type: 'stable',
        },
    },
}

export const ExampleStory = () => `
<p>Example story with no specific <code>MDX</code> Docs.</p>
<p>Storybook automatically creates a Docs page, with a source code view.</p>
`
ExampleStory.storyName = 'Example story with no MDX docs'
