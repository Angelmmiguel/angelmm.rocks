const fs = require('fs');
const path = require('path');

module.exports = {
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
  }
}
