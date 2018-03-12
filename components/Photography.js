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

      .profiles {
        display: flex;
        justify-content: space-between;
      }

      a {
        align-items: center;
        background-color: var(--c-white);
        box-shadow: 10px 10px 0 var(--c-purple-shadow);
        color: var(--c-purple);
        display: flex;
        height: 200px;
        justify-content: center;
        width: 48%;
      }
    `}</style>
  </section>;
}
