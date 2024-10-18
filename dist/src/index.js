export function isProtocol(url) {
    return /^(https?:|mailto:|tel:)/.test(url);
}
export function validPassword(password) {
    let count = 0;
    if (/[^\w!@#]/.test(password)) {
        return false;
    }
    if (/\d/.test(password)) {
        ++count;
    }
    if (/[a-zA-Z]/.test(password)) {
        ++count;
    }
    if (/[_!@#]/.test(password)) {
        ++count;
    }
    return count >= 2;
}
export function validUsername(username) {
    return /^[a-zA-Z]\w{0,9}@?\w{0,9}$/.test(username);
}
export function validPhone(number) {
    return /^(\d{3}-\d{8}|\d{4}-\{7,8}|\d{11})$/.test(number);
}
export function validURL(url) {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return reg.test(url);
}
export function validLowerCase(lower) {
    return /^[a-z]+$/.test(lower);
}
export function validUpperCase(upper) {
    return /^[A-Z]+$/.test(upper);
}
export function validAlphabets(alpha) {
    return /^[A-Za-z]+$/.test(alpha);
}
export function validEmail(email) {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}
export function validArray(array) {
    if (typeof Array.isArray === 'undefined') {
        return Object.prototype.toString.call(array) === '[object Array]';
    }
    return Array.isArray(array);
}
export function validIP(ip) {
    const ipv4 = /^(?=(\b|\D))((\d|([1-9]\d)|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d)|([1-9]\d)|(\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))$/;
    const ipv6 = /^([\\da-fA-F]{1,4}:){7}([\\da-fA-F]{1,4})$/;
    return ipv4.test(ip) || ipv6.test(ip);
}
export function validPort(port) {
    if (typeof port === 'string') {
        return +port >= 0 && +port <= 65535;
    }
    else {
        return port >= 0 && port <= 65535;
    }
}
export function validSpace(space) {
    const isSpace = space === '' || space === null || /^\s*$/.test(space);
    return isSpace;
}
