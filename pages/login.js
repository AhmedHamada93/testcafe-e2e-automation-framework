import {Selector} from 'testcafe';

export default class LoginPage {
    constructor() {
        this.userName = Selector('#username');
        this.password = Selector('#password');
        this.loginButton = Selector('button').withText('Login');
        this.successMessage = Selector('.subheader').withText('Secure Area');
        this.logoutButton = Selector('button').withText('Logout');
    }
}

