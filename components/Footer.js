import Social from './Social';

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
    <Social />
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
    `}</style>
  </footer>
};
