
import React from 'react';
import Link from 'next/link';
import 'isomorphic-unfetch';

// Components
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Blog from '../components/Blog';
import Projects from '../components/Projects';
import Photography from '../components/Photography';
import Footer from '../components/Footer';

class Index extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('http://localhost:3000/api/articles');
    const data = await res.json();
    const { articles } = data;

    // Load projects
    const projects = require('../projects.json');

    return { articles, projects };
  }

  render () {
    return <Layout>
      <Hero />
      <Blog articles={ this.props.articles } />
      <Projects projects={ this.props.projects } />
      <Photography />
      <Footer />
    </Layout>;
  }
}

export default Index;
