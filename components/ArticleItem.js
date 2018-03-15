import Link from 'next/link';

// Article
export default props => (
  <article>
    <h3>
      <Link href={ props.article.path }>
        <a>{ props.article.title }</a>
      </Link>
    </h3>
    <style jsx>{`

    `}</style>
  </article>
);
