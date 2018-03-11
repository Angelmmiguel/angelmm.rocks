import Github from '../Social/Github';

// Single project
export default props => {
  return <article>
    <h3>
      <a href={ props.project.url } rel="noopener noreferrer" target="_blank">
        { props.project.title }
      </a>
      { props.project.github ?
          <a href={ props.project.github } rel="noopener noreferrer" target="_blank"
            className="github">
            <Github style={ { color: 'var(--c-white)', width: '.75em' } } />
          </a>
          : '' }
    </h3>
    <p>
      { props.project.description }
    </p>
    <style jsx>{`
      article {
        margin: 32px 0;
      }

      h3 {
        font-size: 24px;
        font-weight: 400;
        margin: 2px 0 0;
      }

      h3 a {
        color: var(--c-white);
        text-decoration: none;
      }

      p {
        color: var(--c-pink-light);
      }

      .github {
        margin-left: .5em;
        position: relative;
        top: 2px;
      }
    `}</style>
  </article>
};
