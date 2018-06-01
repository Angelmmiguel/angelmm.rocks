const fs = require('fs');
const path = require('path');
const withPreact = require('@zeit/next-preact');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPreact({
  exportPathMap: () => {
    const routes = {
      '/': { page: '/' },
      '/articles': { page: '/articles' },
    };

    const files = fs.readdirSync('./articles/');

    // Prepare articles!
    files.forEach((f) => {
      routes[`/articles/${path.parse(f).name}`] = {
        page: '/article',
        query: { id: path.parse(f).name }
      }
    });

    return routes;
  },
  assetPrefix: isProd ? 'https://angelmmrocks-c1c5.kxcdn.com' : ''
});
