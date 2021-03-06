import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';

// Define the basic template
class Layout extends React.Component {
  static defaultProps = {
    title: 'Angelmm.rocks',
    description: 'Welcome to my personal site! Here you will find all my crazy projects, articles, and much more personal stuff',
    image: 'https://angelmm.rocks/static/social.png',
    twitterTitle: 'Angelmm.rocks',
  }

  // Initialize analytics
  componentDidMount () {
    Router.onRouteChangeStart = () => NProgress.start();
    Router.onRouteChangeError = () => NProgress.done();
    Router.onRouteChangeComplete = () => NProgress.done();
  }

  render() {
    return <div>
      <Head>
        <title>{ this.props.title }</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8A2FFF" />
        <meta name="description" content={ this.props.description } />
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
        { /* Social tags */ }
        <meta property="og:title" content={ this.props.title } />
        <meta property="og:description" content={ this.props.description } />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ this.props.image } />
        <meta property="og:site_name" content="Angelmm.rocks" />
        <meta name="twitter:title" content={ this.props.title } />
        <meta name="twitter:creator" content="@_angelmm" />
        <meta name="twitter:description" content={ this.props.description } />
        <meta name="twitter:image" content={ this.props.image } />
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
          --c-purple-background: #fee6ff;
          --c-pink: #F24592;
          --c-pink-shadow: #D22E77;
          --c-pink-transparent: rgba(231, 49, 240, .8);
          --c-pink-light: #FFBFDB;
          --c-white: #FFF;
          --gutter: 32px;
          --font-family: 'LatoLatinWeb',-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
          --max-width: calc(1120px + 2rem);
        }

        // Font imports!
        @font-face {
          font-family: 'LatoLatinWeb';
          font-style: normal;
          font-weight: 400;
          font-display: fallback;
          src: url('https://angelmmrocks-c1c5.kxcdn.com/static/fonts/LatoLatin-Regular.eot'); /* IE9 Compat Modes */
          src: local('LatoLatin-Regular'), url('https://angelmmrocks-c1c5.kxcdn.com/static/fonts/LatoLatin-Regular.woff2') format('woff2'), /* Modern Browsers */
               url('https://angelmmrocks-c1c5.kxcdn.com/static/fonts/LatoLatin-Regular.woff') format('woff'), /* Modern Browsers */
               url('https://angelmmrocks-c1c5.kxcdn.com/static/fonts/LatoLatin-Regular.ttf') format('truetype');
        }
        @font-face {
          font-family: 'LatoLatinWeb';
          font-style: normal;
          font-weight: 700;
          font-display: fallback;
          src: url('https://angelmmrocks-c1c5.kxcdn.com/static/fonts/LatoLatin-Bold.eot'); /* IE9 Compat Modes */
          src: local('LatoLatin-Bold'), url('https://angelmmrocks-c1c5.kxcdn.com/static/fonts/LatoLatin-Bold.woff2') format('woff2'), /* Modern Browsers */
               url('https://angelmmrocks-c1c5.kxcdn.com/static/fonts/LatoLatin-Bold.woff') format('woff'), /* Modern Browsers */
               url('https://angelmmrocks-c1c5.kxcdn.com/static/fonts/LatoLatin-Bold.ttf') format('truetype');
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

        /* NProgress */
        /* Make clicks pass-through */
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: var(--c-purple);

          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;

          width: 100%;
          height: 2px;
        }

        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px var(--c-pink), 0 0 5px var(--c-pink);
          opacity: 1;
          transform: rotate(3deg) translate(0px, -4px);
        }

        /* Remove these to get rid of the spinner */
        @media screen and (max-width: 590px) {
          #nprogress .spinner {
            display: block;
            position: fixed;
            z-index: 1031;
            top: 15px;
            right: 15px;
          }

          #nprogress .spinner-icon {
            width: 18px;
            height: 18px;
            box-sizing: border-box;

            border: solid 2px transparent;
            border-top-color: var(--c-purple);
            border-left-color: var(--c-pink);
            border-radius: 50%;
            animation: nprogress-spinner 400ms linear infinite;
          }
        }

        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }

        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }

        @keyframes nprogress-spinner {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>;
  }
};

export default Layout;
