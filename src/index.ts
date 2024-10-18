/**
 * @param {string} url
 * @returns {Boolean}
 */
export function isProtocol(url: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(url);
}

/**
 * @param {string} password
 * @returns {Boolean}
 */
export function validPassword(password: string): boolean {
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

/**
 * @param {string} username
 * @returns {Boolean}
 */
export function validUsername(username: string): boolean {
  return /^[a-zA-Z]\w{0,9}@?\w{0,9}$/.test(username);
}

/**
 * @param {string} number
 * @returns {Boolean}
 */
export function validPhone(number: string): boolean {
  return /^(\d{3}-\d{8}|\d{4}-\{7,8}|\d{11})$/.test(number);
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url: string): boolean {
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
}

/**
 * @param {string} lower
 * @returns {Boolean}
 */
export function validLowerCase(lower: string): boolean {
  return /^[a-z]+$/.test(lower);
}

/**
 * @param {string} upper
 * @returns {Boolean}
 */
export function validUpperCase(upper: string): boolean {
  return /^[A-Z]+$/.test(upper);
}

/**
 * @param {string} alpha
 * @returns {Boolean}
 */
export function validAlphabets(alpha: string): boolean {
  return /^[A-Za-z]+$/.test(alpha);
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email: string): boolean {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

/**
 * @param {Array} array
 * @returns {Boolean}
 */
export function validArray(array: []): boolean {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(array) === '[object Array]';
  }
  return Array.isArray(array);
}

/**
 * @param {string} ip
 * @returns {boolean}
 */
export function validIP(ip: string): boolean {
  const ipv4 = /^(?=(\b|\D))((\d|([1-9]\d)|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d)|([1-9]\d)|(\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))$/;
  const ipv6 = /^([\\da-fA-F]{1,4}:){7}([\\da-fA-F]{1,4})$/;
  return ipv4.test(ip) || ipv6.test(ip);
}

/**
 * @param {string | number} port
 * @returns {boolean}
 */
export function validPort(port: string | number): boolean {
  if (typeof port === 'string'){
    return +port >= 0 && +port <= 65535;
  } else {
    return port >=0 && port <=65535;
  }
}

/**
 * @param {string | [] | null | undefined} space
 * @returns {boolean}
 */
export function validSpace(space: string | null | undefined): boolean {
  return space === null || space === undefined || (typeof space === 'string' && /^\s*$/.test(space));
}