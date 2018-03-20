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
        <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/static/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/static/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/static/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/static/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/static/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/static/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/static/favicon-196x196.png" sizes="196x196" />
        <meta name="application-name" content="Angelmm.rocks"/>
        <meta name="msapplication-TileColor" content="#8A2FFF" />
        <meta name="msapplication-TileImage" content="/static/mstile-144x144.png" />
        <meta name="msapplication-square310x310logo" content="/static/mstile-310x310.png" />
      </Head>
      <div>
        { this.props.children }
      </div>
      <style jsx global>{`
        :root {
          --c-background: #fff;
          --c-text: #2C2A2F;
          --c-text-light: #a89fb5;
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
          --max-width: calc(1120px + 2rem);
        }

        body {
          background-color: var(--c-background);
          color: var(--c-text);
          font-family: var(--font-family);
          font-size: 16px;
          margin: 0;
        }

        .container {
          margin: 0 auto;
          max-width: var(--max-width);
          padding: 0 1rem;
          box-sizing: border-box;
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

        // Animations
        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0) rotate(225deg);
          }
          50% {
            transform: translateX(-50%) translateY(8px) rotate(225deg);
          }
          25%, 75% {
            transform: translateX(-50%) translateY(-8px) rotate(225deg);
          }
        }
      `}</style>
    </div>;
  }
};

export default Layout;
