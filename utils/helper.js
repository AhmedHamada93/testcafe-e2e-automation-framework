import {t} from "testcafe";

let faker = require('faker');

export default class Helper {

    /**
     * Set Drop down with Random Value and Return Value selected
     * @param dropDownSelector, t
     * @returns randomValueSelected
     */
    async setRandomValue(dropDownSelector) {
        let options = dropDownSelector.find('option');
        let randomIdx = faker.random.number({
                min: 1, max: await options.count - 1
            })
        ;
        await
            t.click(dropDownSelector.parent(0).find('span'));
        let value = await
            this.optionSelector.nth(randomIdx).innerText;
        await
            t.click(this.optionSelector.nth(randomIdx));
        return value;
    }

    /**
     * Set drop down with value passed
     * @param dropDownSelector
     * @param value, t
     * @returns valueSelected
     */
    async setValue(dropDownSelector, value) {
        await
            t.click(dropDownSelector.parent(0).find('span'));
        await
            t.click(this.optionSelector.withText(value));
    }

}

