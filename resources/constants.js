require('dotenv').config();

//Environment URLS
const envURL = 'http://the-internet.herokuapp.com';

export function getEnvironmentURL() {
    return envURL;
}

export function getLoginPageURL() {
    return `${envURL}/login`;
}
export function getUserName() {
    return process.env.ADMIN_USERNAME;
}

export function getPassword() {
    return process.env.ADMIN_PASSWORD;
}