import { Codepen, Dribbble, Github, Keybase, Linkedin, Twitter } from './Social';

// Hero section
export default () => {
  const iconStyle = { width: '1em' };

  return <section className="hero container">
    <div className="wrap">
      <section className="bio">
        <p>Hey, I’m <span>Ángel</span></p>
        <p>I’m a full stack dev that loves videogames and photography.</p>
        <p className="social">
          <a href="#" rel="noopener noreferrer">
            <Codepen style={ iconStyle } />
          </a>
          <a href="#" rel="noopener noreferrer">
            <Dribbble style={ iconStyle } />
          </a>
          <a href="#" rel="noopener noreferrer">
            <Github style={ iconStyle } />
          </a>
          <a href="#" rel="noopener noreferrer">
            <Keybase style={ iconStyle } />
          </a>
          <a href="#" rel="noopener noreferrer">
            <Linkedin style={ iconStyle } />
          </a>
          <a href="#" rel="noopener noreferrer">
            <Twitter style={ iconStyle } />
          </a>
        </p>
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
      }

      .wrap {
        justify-content: space-between;
        position: relative;
        width: 100%;
      }

      .wrap:before,
      .wrap:after {
        border-top: 1px solid var(--border-color, var(--c-purple));
        border-left: 1px solid var(--border-color, var(--c-purple));
        content: '';
        height: 80px;
        position: absolute;
        width: 250px;
      }

      .wrap:before {
        --border-color: var(--c-pink);
        top: 26px;
        left: 20px;
      }

      .wrap:after {
        top: 46px;
        left: 0px;
      }

      .bio {
        align-self: flex-end;
        font-size: 18px;
        margin-bottom: 11px;
        max-width: 250px;
      }

      span {
        color: var(--c-purple);
      }

      .social {
        color: var(--c-purple);
        margin-bottom: 0;
      }

      .social a {
        color: var(--c-purple);
        margin-right: .75em;
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
