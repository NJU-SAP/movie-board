export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function querystring(obj = {}) {
  const encode = encodeURIComponent;
  return Object.keys(obj)
    .map(k => encode(k) + '=' + encode(obj[k]))
    .join('&');
}
