import React from 'react';
import Link from 'next/link';
import 'isomorphic-unfetch';

// Components
import Header from '../components/Header';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import ArticleItem from '../components/ArticleItem';

class Index extends React.Component {
  static async getInitialProps () {
    const prefix = typeof window == 'undefined' ? 'http://localhost:3000' : '';
    const res = await fetch(`${prefix}/static/_data/api/articles.json`);
    const data = await res.json();
    const { articles } = data;

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

export default Index;
