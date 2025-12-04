export const DateOfBirthHtml = () => /*html*/ `
<fieldset class="fieldset">
    <legend class="legend">Date of birth</legend>
    <div class="flex">
        <div class="form__field">
            <label for="dob-day" class="label">
                Day
            </label>
            <input
                type="number"
                id="dob-day"
                name="dob-day"
                class="input"
                min="1"
                max="31"
                step="1"
                autocomplete="bday-day"
                required
            />
        </div>
        <div class="form__field">
            <label for="dob-month" class="label">
                Month
            </label>
            <select
                class="select"
                id="dob-month"
                name="dob-month"
                autocomplete="bday-month"
                required
            >
                <option value="">Please choose...</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
        </div>
        <div class="form__field">
            <label for="dob-year" class="label">
                Year
            </label>
            <input
                type="number"
                id="dob-year"
                name="dob-year"
                class="input"
                min="1900"
                step="1"
                autocomplete="bday-year"
                required
            />
        </div>
    </div>
</fieldset>
`;
