const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Root = React.createFactory(require('../../src/mb/Root.jsx'));
const configStore = require('../../src/mb/store');

const template = require('./template');
const comingSoon = require('../data/comingSoon');
const inTheaters = require('../data/inTheaters');
const top250 = require('../data/top250');

module.exports = function serve(req, res) {
  const initialState = { comingSoon, inTheaters, top250 };
  const store = configStore(initialState);
  const html = ReactDOMServer.renderToString(Root({ store }));
  res.end(template(html, initialState));
};
