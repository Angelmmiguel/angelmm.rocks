import Social from './Social';

// Footer
export default () => {
  const iconStyle = { width: '18px' };
  return <div  className="container">
    <footer>
      <p>
        © 2018 Ángel. This is an open
        { ' ' }
        <a href="https://github.com/Angelmmiguel/angelmm.rocks" rel="noopener noreferrer" target="_blank">
          source project
        </a>
      </p>
      <div className="social">
        <Social />
      </div>
    </footer>
    <style jsx>{`
      footer {
        padding: 2rem 0;
      }

      p,
      .social {
        text-align: center;
      }

      p {
        margin-bottom: 1rem;
      }

      @media screen and (min-width: 500px) {
        footer {
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding: 0;
          height: 95px;
        }

        p {
          margin: 0;
        }
      }
    `}</style>
  </div>
};
