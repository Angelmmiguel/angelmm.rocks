
import React from 'react';

// Components
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Blog from '../components/Blog';
import Projects from '../components/Projects';
import Photography from '../components/Photography';
import Footer from '../components/Footer';

class Index extends React.Component {
  static async getInitialProps ({ query }) {
    // Load projects
    const articles = require('../articles.json');

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
