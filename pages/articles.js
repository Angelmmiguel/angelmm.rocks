import React from 'react';

// Components
import Header from '../components/Header';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import ArticleItem from '../components/ArticleItem';

class Articles extends React.Component {
  static async getInitialProps () {
    const articles = require('../articles.json');
    return { articles };
  }

  render () {
    return <Layout>
      <Header />
      <section className="container">
        { this.props.articles.map(a => <ArticleItem key={ a.path } article={ a } />)}
      </section>
      <Footer />
    </Layout>;
  }
}

export default Articles;
