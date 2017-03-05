import compression from 'compression';
import express from 'express';
import proxy from 'http-proxy-middleware';

import serverRenderer from './renderer';

const app = express();
app.use(compression());

app.get('/', serverRenderer);
app.use(express.static('public'));

app.use('/api', proxy({
  target: 'http://api.douban.com',
  pathRewrite: { '^/api': '' },
  changeOrigin: true,
}));

console.log('\n[WARNING] movie-board is now running in PRODUCTION mode.'); // eslint-disable-line
app.listen(8080, () => {
  console.log('[INFO] movie-board is now listening at 8080...'); // eslint-disable-line
});
