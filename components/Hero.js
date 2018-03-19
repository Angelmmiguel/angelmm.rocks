import Social from './Social';
import Link from 'next/link';

// Hero section
export default () => {
  return <section className="hero container">
    <div className="wrap">
      <section className="bio">
        <div className="avatar-wrapper">
          <div className="avatar">
            <img src="/static/images/avatar.jpg" alt="It's me with a cap and a blue coat" />
          </div>
        </div>
        <div>
          <p>Hey, I'm <span>Ángel</span></p>
          <p>I'm a full stack dev that loves videogames and photography.</p>
          <div className="social">
            <Social />
          </div>
        </div>
      </section>
      <nav>
        <p>
          <Link href="/articles">
            <a>Blog</a>
          </Link>
        </p>
        <p>
          <a href="#" rel="noopener noreferrer">Projects</a>
        </p>
        <p>
          <a href="#" rel="noopener noreferrer">Photography</a>
        </p>
        <p>
          <a href="#" rel="noopener noreferrer">Videogames</a>
        </p>
      </nav>
    </div>
    <style jsx>{`
      .hero,
      .wrap {
        align-items: center;
        display: flex;
        flex-direction: column;
      }

      .hero {
        position: relative;
      }

      .wrap {
        justify-content: space-between;
        width: 100%;
        margin-bottom: 50px;
      }

      @media screen and (min-width: 768px) {
        .hero,
        .wrap {
          flex-direction: row;
        }

        .wrap {
          align-items: initial;
        }

        .hero {
          min-height: 100vh;
        }

        .hero:before,
        .hero:after {
          animation: bounce 4s ease-in-out 2;
          border-top: 1px solid var(--border-color, var(--c-purple));
          border-left: 1px solid var(--border-color, var(--c-purple));
          bottom: 30px;
          content: '';
          height: 20px;
          position: absolute;
          width: 20px;
          transform: translateX(-50%) rotate(225deg);
        }

        .hero:before {
          --border-color: var(--c-pink);
          left: 49.5%;
        }

        .hero:after {
          left: 50.5%;
        }
      }

      .avatar-wrapper {
        --avatar-size: 96px;
        position: relative;
        z-index: 1;
        width: var(--avatar-size);
        height: var(--avatar-size);
        margin: 26px 0;
      }

      .avatar {
        position: relative;
        width: var(--avatar-size);
        height: var(--avatar-size);
      }

      .avatar::after {
        border-radius: 99px;
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background: linear-gradient(75deg, var(--c-purple), var(--c-pink));
        left: 0;
        top: 0.25rem;
        filter: blur(0.4rem);
        opacity: 0.7;
        z-index: -1;
      }

      .avatar img {
        width: var(--avatar-size);
        height: var(--avatar-size);
        border-radius: 99px;
        border: 1px solid rgba(255, 255, 255, .3);
      }

      .bio {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 18px;
        margin-bottom: 16px;
        max-width: 250px;
      }

      .bio p {
        margin-bottom: 1em;
      }

      .social {
        margin-top: 1.5em;
      }

      span {
        color: var(--c-purple);
      }

      nav {
        margin-top: 24px;
        text-align: right;
      }

      nav p {
        margin: 0;
      }

      nav a {
        color: var(--c-purple-transparent);
        font-size: 32px;
        font-weight: 700;
        text-decoration: none;
        text-shadow: 3px 3px 0 var(--c-pink-transparent);
        text-transform: uppercase;
      }

      @media screen and (min-width: 768px) {
        nav {
          margin-top: 0;
        }

        nav a {
          font-size: 100px;
          text-shadow: 6px 6px 0 var(--c-pink-transparent);
        }
      }
    `}</style>
  </section>;
};
