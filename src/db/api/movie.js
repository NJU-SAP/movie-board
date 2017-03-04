import { querystring } from '../../mb/util';

const API_URL = '/api/v2/movie';
const API_KEY = '0df993c66c0c636e29ecbb5344252a4a';

export default {
  inTheaters: createMethod('in_theaters'),
  comingSoon: createMethod('coming_soon'),
  top250: createMethod('top250'),
  movie: createMethod('subject')
};

function myFetch(path, args) {
  const data = {
    ...args,
    apikey: API_KEY
  };
  return fetch(`${API_URL}/${path}?${querystring(data)}`)
    .then(res => res.json());
}

function createMethod(
  path,
  payloadHandler = payload => payload,
  responseHandler = response => response) {
  return async (payload, extraPath = '') => {
    const args = payloadHandler(payload);
    const response = await myFetch(path + extraPath, args);
    return responseHandler(response);
  };
}
