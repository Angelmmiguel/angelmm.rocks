import Social from './Social';

// Hero section
export default () => {
  return <section className="hero container">
    <div className="wrap">
      <section className="bio">
        <p>Hey, I'm <span>Ángel</span></p>
        <p>I'm a full stack dev that loves videogames and photography.</p>
        <div className="social">
          <Social />
        </div>
      </section>
      <nav>
        <p>
          <a href="https://medium.com/@angelmm/" rel="noopener noreferrer">Blog</a>
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
        display: flex;
      }

      .hero {
        align-items: center;
        min-height: 100vh;
        position: relative;
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

      .wrap {
        justify-content: space-between;
        width: 100%;
        margin-bottom: 50px;
      }

      .bio {
        align-self: flex-end;
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
        text-align: right;
      }

      nav p {
        margin: 0;
      }

      nav a {
        color: var(--c-purple-transparent);
        font-size: 100px;
        font-weight: 700;
        text-decoration: none;
        text-shadow: 6px 6px 0 var(--c-pink-transparent);
        text-transform: uppercase;
      }
    `}</style>
  </section>;
};
