import React from 'react';

// Components
import Header from '../components/Header';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Markdown from '../components/Markdown';

class Article extends React.Component {
  render() {
    return <Layout
      title={ `${this.props.meta.title} | Angelmm.rocks` }
      description={ this.props.meta.description }>
      <Header />
      <article>
        <header>
          { this.props.meta.image ?
            <div className='image'>
              <img src={ `/static/images/articles/${this.props.meta.image}`} />
            </div>
            : '' }
          <h1 className="title">{ this.props.meta.title }</h1>
          <time>{ this.props.meta.published }</time>
        </header>
        <Markdown Content={this.props.Content} />
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

        img,
        .image,
        .image:before {
          max-width: 400px;
        }

        .image,
        .image:before {
          min-height: 200px;
        }

        img {
          display: block;
        }

        .image {
          margin: 0 auto 1rem;
          position: relative;
        }

        .image:before {
          background: linear-gradient(45deg, var(--c-purple), #fff);
          content: '';
          left: 0;
          position: absolute;
          top: 0;
          opacity: .3;
          z-index: -1;
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

        .markdown {
          font-size: 18px;
          line-height: 1.618;
        }

        .markdown p {
          margin: .75em 0 1em;
        }

        .markdown img {
          box-shadow: 10px 10px 0 0 var(--c-purple-shadow);
          display: block;
          margin: 0 auto;
          max-width: 720px;
          width: 100%;
        }

        .markdown blockquote {
          border-left: 3px solid var(--c-pink);
          color: #514f54;
          margin: 1em 0;
          padding-left: 1.5em;
        }

        .markdown blockquote p {
          margin: .25em 0;
        }
      `}</style>
    </Layout>;
  }
}

export default Article;
