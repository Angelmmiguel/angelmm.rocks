import React from 'react';
import 'isomorphic-unfetch';

// Components
import Header from '../components/Header';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Markdown from '../components/Markdown';

class Article extends React.Component {
  static async getInitialProps ({ query }) {
    // eslint-disable-next-line no-undef
    const res = await fetch(`http://localhost:3000/api/articles/${query.id}`);
    const data = await res.json();
    const { article } = data;

    return { article };
  }

  markdown() {
    return {
      __html: this.props.article.html
    }
  }

  render() {
    return <Layout title={ `${this.props.article.title} | Angelmm.rocks` }>
      <Header />
      <article>
        <header>
          { this.props.article.image ?
            <img src={ `/static/images/articles/${this.props.article.image}`} />
            : '' }
          <h1 className="title">{ this.props.article.title }</h1>
          <time>{ this.props.article.published }</time>
        </header>
        <Markdown markdown={ this.markdown() } />
      </article>
      <Footer />
      <style jsx>{`
        article {
          margin: 0 auto;
          max-width: 720px;
          padding: 0 1rem;
          box-sizing: border-box;
        }

        header {
          text-align: center;
          margin: 2rem 0 4rem;
        }

        img {
          max-width: 400px;
          margin-bottom: 1rem;
        }

        .title {
          color: var(--c-purple);
          font-size: 70px;
          margin: 0;
        }

        time {
          color: var(--c-text-light);
          display: block;
          font-size: 12px;
          font-weight: bold;
        }
      `}</style>
    </Layout>;
  }
}

export default Article;
