import React from 'react';
import Link from 'next/link';
import Mobile from './Mobile';
import Logo from '../Logo';

// Main header
class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  render() {
    return <header className={ `container ${this.state.open ? 'open' : ''}` }>
      <div className="content">
        <div className="logo">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <button className="mobile" onClick={ () => this.setState({ open: !this.state.open })}>
          <Mobile style={ { height: '2em' }}/>
        </button>
        <nav>
          <Link href="/articles">
            <a>Blog</a>
          </Link>
          <Link href="/">
            <a>Projects</a>
          </Link>
          <Link href="/">
            <a>Photography</a>
          </Link>
          <Link href="/">
            <a>Videogames</a>
          </Link>
        </nav>
      </div>
      <style jsx>{`
        .content {
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding: 2rem 0;
        }

        a {
          color: var(--c-purple-transparent);
          font-size: 18px;
          font-weight: bold;
          margin-right: 1rem;
          text-shadow: 2px 2px 0 var(--c-pink-transparent);
          text-transform: uppercase;
        }

        nav a:last-child {
          margin-right: 0;
        }

        .mobile {
          border: none;
          background: none;
          cursor: pointer;
          display: none;
        }

        @media screen and (max-width: 590px) {
          .content {
            position: relative;
          }

          .mobile {
            display: block;
            z-index: 2;
          }

          .logo {
            z-index: 2;
          }

          nav {
            background-color: rgba(255, 255, 255, .9);
            display: none;
            min-height: calc(100vh - 5rem);
            top: 0;
            padding-top: 5rem;
            position: absolute;
            width: 100%;
            z-index: 1;
          }

          nav a {
            display: block;
            font-size: 2.5em;
            text-align: center;
            margin: 1rem 0;
            opacity: 0;
            will-change: transfrom;
          }

          .open nav {
            display: block;
            animation: fadein .15s ease-in;
          }

          .open nav a {
            animation: fadein-links .4s cubic-bezier(0.77, 0, 0.175, 1) .15s forwards;
          }

          .open nav a:nth-child(2) {
            animation-delay: .20s;
          }

          .open nav a:nth-child(3) {
            animation-delay: .25s;
          }

          .open nav a:nth-child(4) {
            animation-delay: .30s;
          }
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadein-links {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          50% {
            opacity: .8;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>;
  }
};

export default Header;
