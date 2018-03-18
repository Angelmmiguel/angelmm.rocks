import { Codepen, Dribbble, Github, Keybase, Linkedin, Twitter } from './';

// Social
export default () => {
  const iconStyle = { width: '1em' };

  return <p>
    <a href="https://codepen.io/angelmm/" rel="noopener noreferrer" target="_blank">
      <Codepen style={ iconStyle } />
    </a>
    <a href="https://dribbble.com/angelmm" rel="noopener noreferrer" target="_blank">
      <Dribbble style={ iconStyle } />
    </a>
    <a href="https://github.com/Angelmmiguel" rel="noopener noreferrer" target="_blank">
      <Github style={ iconStyle } />
    </a>
    <a href="https://keybase.io/angelmm" rel="noopener noreferrer" target="_blank">
      <Keybase style={ iconStyle } />
    </a>
    <a href="https://linkedin.com/in/angelmmiguel" rel="noopener noreferrer" target="_blank">
      <Linkedin style={ iconStyle } />
    </a>
    <a href="https://twitter.com/_angelmm" rel="noopener noreferrer" target="_blank">
      <Twitter style={ iconStyle } />
    </a>
    <style jsx>{`
      p {
        margin: 0;
      }

      a {
        color: var(--c-purple);
        margin-right: .75em;
      }

      p a:last-child {
        margin-right: 0;
      }
    `}</style>
  </p>
}
