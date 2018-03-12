import React from 'react';
import Router from 'next/router';
import Head from 'next/head';

// Analytics
import { initGA, logPageView } from '../utils/analytics';

// Define the basic template
class Layout extends React.Component {
  // Initialize analytics
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();

    // Add a callback to set the pageview
    Router.onRouteChangeComplete = () => {
      logPageView();
    }
  }

  get title() {
    return this.props.title || 'Angelmm.rocks';
  }

  render() {
    return <div>
      <Head>
        <title>{ this.title }</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8A2FFF" />
      </Head>
      <div>
        { this.props.children }
      </div>
      <style jsx global>{`
        :root {
          --c-text: #2C2A2F;
          --c-purple: #8A2FFF;
          --c-purple-shadow: #6110CB;
          --c-purple-transparent: rgba(138, 47, 255, .8);
          --c-purple-light: #FDD1FF;
          --c-pink: #F24592;
          --c-pink-shadow: #D22E77;
          --c-pink-transparent: rgba(231, 49, 240, .8);
          --c-pink-light: #FFBFDB;
          --c-white: #FFF;
          --gutter: 32px;
          --font-family: 'Lato', sans-serif;
          --max-width: 1120px;
        }

        body {
          font-family: var(--font-family);
          font-size: 16px;
          color: var(--c-text);
          margin: 0;
        }

        .container {
          margin: 0 auto;
          max-width: var(--max-width);
        }

        // Button
        .button {
          --button-color:var(--c-purple);
          --button-shadow: var(--c-purple-shadow);
          background-color: var(--c-white);
          border-radius: 16px;
          box-shadow: 10px 10px 0 var(--button-shadow);
          color: var(--button-color);
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          text-transform: uppercase;
          padding: 8px 32px;
        }

        .button.pink {
          --button-color: var(--c-pink);
          --button-shadow: var(--c-pink-shadow);
        }

        // anchors
        a {
          color: var(--c-purple);
          text-decoration: none;
        }
      `}</style>
    </div>;
  }
};

export default Layout;
