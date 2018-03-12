import Title from '../Title';
import Project from './Project';

// List of featured projects
export default props => {
  return <section className="projects">
  <div className="container">
    <Title>Featured projects</Title>
    { props.projects.map(project =>
          <Project key={ project.url } project={ project } />) }
    <p>
      <a className="button pink" href="https://github.com/Angelmmiguel" rel="noopener noreferrer">
        All projects
      </a>
    </p>
  </div>
  <style jsx>{`
    .projects {
      background-color: var(--c-pink);
      padding: 64px 0;
    }

    p {
      margin-top: 42px;
    }
  `}</style>
</section>;
}
