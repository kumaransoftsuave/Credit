export function cardNumberFormatter(oldValue, newValue) {
  // user is deleting so return without formatting
  if (oldValue.length > newValue.length) {
    return newValue;
  }

  return newValue
    .replace(/\W/gi, '')
    .replace(/(.{4})/g, '$1 ')
    .substring(0, 19);
}

export function expirationDateFormatter(oldValue, newValue) {
  // user is deleting so return without formatting
  if (oldValue.length > newValue.length) {
    return newValue;
  }
  return newValue
    .replace(/\W/gi, '')
    .replace(/(.{2})/g, '$1/')
    .substring(0, 5);
}

export function validateExpiry(input) {
  // ensure basic format is correct
  if (input.match(/^(0\d|1[0-2])\/\d{2}$/)) {
    const {0: month, 1: year} = input.split('/');

    // get midnight of first day of the next month
    const expiry = new Date('20' + year, month);
    const current = new Date();

    return expiry.getTime() > current.getTime();
  } else {
    return false;
  }
}
