export default {
    title: 'Forms/Radio',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        disabled: { control: 'boolean' },
    },
}

export const Radio = (args) => `
<fieldset class="fieldset">
    <legend class="legend">Radio legend</legend>
    <div class="radio">
        <input type="radio" id="radio-1" class="radio__input" name="radio_group" ${args.disabled === true ? 'disabled' : ''} />
        <label for="radio-1" class="radio__label">Radio 1 label</label>
    </div>
    <div class="radio">
        <input type="radio" id="radio-2" class="radio__input" name="radio_group" ${args.disabled === true ? 'disabled' : ''} />
        <label for="radio-2" class="radio__label">Radio 2 label</label>
    </div>
</fieldset>
`
