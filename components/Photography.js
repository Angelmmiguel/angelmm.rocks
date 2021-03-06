import Title from './Title';
import Unsplash from './Social/Unsplash';
import Fivehundredpx from './Social/Fivehundredpx';

// Photography section
export default props => {
  return <section className="photography">
    <div className="container">
      <Title>Photography</Title>
      <section className="profiles">
        <a href="https://unsplash.com/@angelmm" rel="noopener noreferrer" target="_blank">
          <Unsplash style={ { width: '2em' } } />
        </a>
        <a href="https://500px.com/4ngelmm" rel="noopener noreferrer" target="_blank">
          <Fivehundredpx style={ { width: '4em' } } />
        </a>
      </section>
    </div>
    <style jsx>{`
      .photography {
        background-color: var(--c-purple);
        padding: 64px 0;
      }

      @media screen and (min-width: 500px) {
        .profiles {
          display: flex;
          justify-content: space-between;
        }

        a {
          margin-bottom: 0;
        }

        a:first-child {
          margin-right: 1rem;
        }
      }

      a {
        align-items: center;
        background-color: var(--c-white);
        box-shadow: 10px 10px 0 var(--c-purple-shadow);
        color: var(--c-purple);
        display: flex;
        height: 200px;
        justify-content: center;
        margin-bottom: 1rem;
        width: 100%;
      }

    `}</style>
  </section>;
}
