const express = require('express');
const next = require('next');
const fm = require('front-matter');

const fs = require('fs');
const path = require('path');
const join = path.join.bind(__dirname);

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/api/articles', (req, res) => {
      // Load the files every time so I don't need to restart the server on changes
      const files = fs.readdirSync('./articles/');

      // Prepare articles!
      const articles = [];

      files.forEach((f) => {
        const data = fs.readFileSync(join('articles', f), 'utf8');
        const article = fm(data);
        articles.push({
          ...article.attributes,
          path: `/articles/${path.parse(f).name}`
        });
      });

      res.json({ articles });
    });

    server.get('/articles/:id', (req, res) => {
      return app.render(req, res, '/article', { id: req.params.id })
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
