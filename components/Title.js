// A simple title
export default props => (
  <h1>
    { props.children }
    <style jsx>{`
      h1 {
        border-top: 1px solid var(--c-white);
        color: var(--c-white);
        font-size: 20px;
        margin: 0 0 36px;
        max-width: 350px;
        padding-top: 6px;
        text-transform: uppercase;
      }
    `}</style>
  </h1>
);
