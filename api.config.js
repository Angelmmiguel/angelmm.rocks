const fs = require('fs');
const path = require('path');

module.exports = {
  exportPathMap: () => {
    const routes = [
      '/api/articles',
    ];

    const files = fs.readdirSync('./articles/');

    // Prepare articles!
    files.forEach((f) => {
      routes.push(`/api/articles/${path.parse(f).name}`);
    });

    return routes;
  }
}
