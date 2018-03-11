import Title from '../Title';
import Article from './Article';

// Blog section
export default props => {
  return <section className="blog">
    <div className="container">
      <Title>Latest articles</Title>
      { props.articles.map(article =>
          <Article key={ article.uniqueSlug } article={ article } />) }
      <p>
        <a className="button" href="https://medium.com/@angelmm" rel="noopener noreferrer">
          All articles
        </a>
      </p>
    </div>
    <style jsx>{`
      .blog {
        background-color: var(--c-purple);
        padding: 42px 0;
      }

      p {
        margin-top: 42px;
      }
    `}</style>
  </section>;
}
