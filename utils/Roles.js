require('dotenv').config();
import {Role} from 'testcafe';
import * as constants from "../resources/constants";
import LoginPage from "../pages/login";


const loginPage = new LoginPage();

export const admin = Role(constants.getLoginPageURL(), async t => {
    await t.maximizeWindow();
    await t.typeText(loginPage.userName, constants.getUserName());
    await t.typeText(loginPage.password, constants.getPassword());
    await t.click(loginPage.loginButton);
}, { preserveUrl: true });

export const invalidUserName = Role(constants.getLoginPageURL(), async t => {
    await t.maximizeWindow();
    await t.typeText(loginPage.userName, `invalidUserName`);
    await t.typeText(loginPage.password, constants.getPassword());
    await t.click(loginPage.loginButton);
}, { preserveUrl: true });

export const invalidPassword = Role(constants.getLoginPageURL(), async t => {
    await t.maximizeWindow();
    await t.typeText(loginPage.userName, constants.getUserName());
    await t.typeText(loginPage.password, `invalidPassword`);
    await t.click(loginPage.loginButton);
}, { preserveUrl: true });
