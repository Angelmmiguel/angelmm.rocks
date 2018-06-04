require('@zeit/next-preact/alias')();

const express = require('express');
const next = require('next');
const fm = require('front-matter');
const mdx = require('@mdx-js/mdx');

const fs = require('fs');
const path = require('path');
const join = path.join.bind(__dirname);

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Parse the dd-mm-yyyy date fortmat
const parseDate = (published) => {
  const split = published.split('-');
  return new Date(parseInt(split[2], 10), parseInt(split[1], 10) - 1,
    parseInt(split[0], 10));
};

// Get the list of articles
const getArticles = () => {
  // Load the files every time so I don't need to restart the server on changes
  const files = fs.readdirSync('./articles/');

  // Prepare articles!
  let articles = [];

  files.forEach((f) => {
    const data = fs.readFileSync(join('articles', f), 'utf8');

    if (f.split('.')[1] === 'md') {
      const article = fm(data);

      articles.push({
        ...article.attributes,
        id: path.parse(f).name,
        path: `/articles/${path.parse(f).name}`
      });
    } else {
      const jsx = mdx(data);
      console.log(jsx);
    }
  });

  // Sort!
  articles = articles.sort((a, b) => {
    const d1 = parseDate(a.published);
    const d2 = parseDate(b.published);
    return d1 < d2;
  });

  return articles;
}

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/static/_data/api/articles.json', (req, res) => {
      res.json({ articles: getArticles() });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
