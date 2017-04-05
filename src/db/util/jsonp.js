let id = 0;

function jsonp(url) {
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement('script');
  const callbackName = `__jsonp${id++}`;

  script.src = `${url}&callback=${callbackName}`;
  script.async = true;
  head.appendChild(script);

  return new Promise((resolve, reject) => {
    window[callbackName] = function(res) {
      delete window[callbackName];
      resolve(res);
      head.removeChild(script);
    }
  });
}

export default jsonp;
