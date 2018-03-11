import { Codepen, Dribbble, Github, Keybase, Linkedin, Twitter } from './Social';

// Footer
export default () => {
  const iconStyle = { width: '18px' };
  return <footer className="container">
    <p>
      © 2018 Ángel. This is an open
      { ' ' }
      <a href="https://github.com/Angelmmiguel/angelmm.rocks" rel="noopener noreferrer" target="_blank">
        source project
      </a>
    </p>
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
    <style jsx>{`
      footer {
        align-items: center;
        display: flex;
        justify-content: space-between;
        height: 95px;
      }

      p {
        margin: 0;
      }

      .social a {
        margin-right: .75em;
      }

      .social a:last-child {
        margin-right: 0;
      }
    `}</style>
  </footer>
};
