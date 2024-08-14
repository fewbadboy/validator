export { say } from './src/person/index';
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path);
}
export function validPassword(param) {
    let i = 0;
    if (/[^\w!@#]/.test(param)) {
        return false;
    }
    if (/\d/.test(param)) {
        ++i;
    }
    if (/[a-zA-Z]/.test(param)) {
        ++i;
    }
    if (/[_!@#]/.test(param)) {
        ++i;
    }
    return i >= 2;
}
export function validName(param) {
    const reg = /^[a-zA-Z]\w{0,9}@?\w{0,9}$/;
    return reg.test(param);
}
export function validPhone(param) {
    const reg = /^(\d{3}-\d{8}|\d{4}-\{7,8}|\d{11})$/;
    return reg.test(param);
}
export function validURL(url) {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return reg.test(url);
}
export function validLowerCase(param) {
    const reg = /^[a-z]+$/;
    return reg.test(param);
}
export function validUpperCase(param) {
    const reg = /^[A-Z]+$/;
    return reg.test(param);
}
export function validAlphabets(param) {
    const reg = /^[A-Za-z]+$/;
    return reg.test(param);
}
export function validEmail(email) {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}
export function validArray(param) {
    if (typeof Array.isArray === 'undefined') {
        return Object.prototype.toString.call(param) === '[object Array]';
    }
    return Array.isArray(param);
}
export function validateIP(param) {
    const ipv4 = /^(?=(\b|\D))((\d|([1-9]\d)|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d)|([1-9]\d)|(\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))$/;
    const ipv6 = /^([\\da-fA-F]{1,4}:){7}([\\da-fA-F]{1,4})$/;
    return ipv4.test(param.trim()) || ipv6.test(param.trim());
}
export function validPort(param) {
    if (typeof param === 'string') {
        return +param.trim() >= 0 && +param.trim() <= 65535;
    }
    else {
        return param >= 0 && param <= 65535;
    }
}
export function validSpace(param) {
    const isSpace = param === '' || param === null || /^\s*$/.test(param);
    return isSpace;
}
