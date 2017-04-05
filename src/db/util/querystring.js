export default function querystring(obj = {}) {
  const encode = encodeURIComponent;
  return Object.keys(obj)
    .map(k => encode(k) + '=' + encode(obj[k]))
    .join('&');
}
