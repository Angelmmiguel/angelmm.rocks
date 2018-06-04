const fs = require('fs');
const path = require('path');
const withPreact = require('@zeit/next-preact');
const withMDX = require('@zeit/next-mdx')();
const isProd = process.env.NODE_ENV === 'production';

module.exports = withMDX(withPreact({
  exportPathMap: () => {
    const routes = {
      '/': { page: '/' },
      '/articles': { page: '/articles' },
    };

    const files = fs.readdirSync('./pages/articles/');

    // Prepare articles!
    files.forEach((f) => {
      routes[`/articles/${path.parse(f).name}`] = {
        page: `/articles/${path.parse(f).name}`
      }
    });

    return routes;
  },
  assetPrefix: isProd ? 'https://angelmmrocks-c1c5.kxcdn.com' : ''
}));
