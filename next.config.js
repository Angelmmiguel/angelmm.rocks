const fs = require('fs');
const path = require('path');
const withMDX = require('@zeit/next-mdx')();

module.exports = withMDX({
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
  }
});
