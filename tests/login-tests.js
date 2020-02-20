import * as constants from "../resources/constants";
import * as userRoles from "../utils/roles.js";
import LoginPage from '../pages/login.js';

const loginPage = new LoginPage();

fixture('Login')
    .page(constants.getLoginPageURL())
    .meta('regression', 'true');

/**
 * Login Test Scenarios
 *  1. Login with valid userName and password.
 *  2. Login with invalid userName and valid password.
 *  3. Login with valid userName and invalid password.
 */

const loginTestData = require('../data/loginData');
loginTestData.forEach(data => {
    test(`Login with ${data.role} should ${data.success ? 'success' : 'fail'}`, async t => {
        await t.useRole(userRoles[data.role]);
        if (data.success) {
            await t.expect(loginPage.successMessage.exists).ok('LOGIN FAILED WITH VALID CREDENTIALS.');
        } else {
            await t.expect(loginPage.successMessage.exists).notOk('LOGIN SUCCESS WITH INVALID CREDENTIALS.');
        }
    });
});