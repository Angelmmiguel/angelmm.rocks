import React from 'react';
import 'isomorphic-unfetch';

// Components
import Header from '../components/Header';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Markdown from '../components/Markdown';

class Article extends React.Component {
  static async getInitialProps ({ query }) {
    const prefix = typeof window == 'undefined' ? 'http://localhost:3000' : '';
    const res = await fetch(`${prefix}/static/_data/api/articles/${query.id}.json`);
    const data = await res.json();
    const { article } = data;

    return { article };
  }

  constructor(props) {
    super(props);

    this.state = {
      width: this.props.article.imageWidth
    }
  }

  componentDidMount() {
    const width = this.header.offsetWidth;
    this.setState({ width });    
  }

  markdown() {
    return {
      __html: this.props.article.html
    }
  }

  imageStyle() {
    const article = this.props.article;
    const { imagePalette, imageWidth, imageHeight } = article;
    let width = imageWidth / 2;
    let height = imageHeight / 2;

    if (this.state.width < width) {
      height = (this.state.width * height) / width;
      width = this.state.width;
    }

    return {
      '--vibrant': imagePalette[0],
      '--light': imagePalette[1],
      '--height': `${height}px`,
      '--width': `${width}px`
    }
  }

  render() {
    
    return <Layout title={ `${this.props.article.title} | Angelmm.rocks` }>
      <Header />
      <article>
        <header ref={ (header) => this.header = header }>
          { this.props.article.image ?
            <div className='image' style={ this.imageStyle() }>
              <img src={ `/static/images/articles/${this.props.article.image}`} />
            </div>
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

        img,
        .image,
        .image:before {
          max-width: 100%;
          width: var(--width, 100%);
        }

        .image,
        .image:before {
          height: var(--height, auto);
        }

        img {
          display: block;
        }

        .image {
          margin: 0 auto 1rem;
          position: relative;
        }

        .image:before {
          background: linear-gradient(45deg, var(--vibrant, #fff), #fff);
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
      `}</style>
    </Layout>;
  }
}

export default Article;
