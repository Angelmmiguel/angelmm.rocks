import Link from 'next/link';
import Title from '../Title';
import Article from './Article';

// Blog section
export default props => {
  return <section className="blog">
    <div className="container">
      <Title>Latest articles</Title>
      { props.articles.map((article, i) =>
          <Article key={ article.path } article={ article } position={ i } />) }
      <p>
        <Link prefetch href="/articles">
          <a className="button">
            All articles
          </a>
        </Link>
      </p>
    </div>
    <style jsx>{`
      .blog {
        background-color: var(--c-purple);
        padding: 64px 0;
      }

      p {
        margin-top: 42px;
      }
    `}</style>
  </section>;
}
