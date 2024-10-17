export * from '@/main/index'
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * @param {string} param
 * @returns {Boolean}
 */
export function validPassword(param: string): boolean {
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

/**
 * @param {string} param
 * @returns {Boolean}
 */
export function validName(param: string): boolean {
  const reg = /^[a-zA-Z]\w{0,9}@?\w{0,9}$/;
  return reg.test(param);
}

/**
 * @param {string} param
 * @returns {Boolean}
 */
export function validPhone(param: string): boolean {
  const reg = /^(\d{3}-\d{8}|\d{4}-\{7,8}|\d{11})$/;
  return reg.test(param);
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
 * @param {string} param
 * @returns {Boolean}
 */
export function validLowerCase(param: string): boolean {
  const reg = /^[a-z]+$/;
  return reg.test(param);
}

/**
 * @param {string} param
 * @returns {Boolean}
 */
export function validUpperCase(param: string): boolean {
  const reg = /^[A-Z]+$/;
  return reg.test(param);
}

/**
 * @param {string} param
 * @returns {Boolean}
 */
export function validAlphabets(param: string): boolean {
  const reg = /^[A-Za-z]+$/;
  return reg.test(param);
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
 * @param {Array} param
 * @returns {Boolean}
 */
export function validArray(param: []): boolean {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(param) === '[object Array]';
  }
  return Array.isArray(param);
}

/**
 * @param {string} param
 * @returns {boolean}
 */
export function validateIP(param: string): boolean {
  const ipv4 = /^(?=(\b|\D))((\d|([1-9]\d)|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d)|([1-9]\d)|(\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))$/;
  const ipv6 = /^([\\da-fA-F]{1,4}:){7}([\\da-fA-F]{1,4})$/;
  return ipv4.test(param.trim()) || ipv6.test(param.trim());
}

/**
 * @param {string | number} param
 * @returns {boolean}
 */
export function validPort(param: string | number): boolean {
  if (typeof param === 'string'){
    return +param.trim() >= 0 && +param.trim() <= 65535;
  } else {
    return param >=0 && param <=65535;
  }
}

/**
 * @param {string} param
 * @returns {boolean}
 */
export function validSpace(param: string): boolean {
  const isSpace = param === '' || param === null || /^\s*$/.test(param);
  return isSpace
}