import Link from 'next/link';

// Single article
export default props => {

  return <article>
    <time>{ props.article.published }</time>
    <h3>
      <Link href={ props.article.path }>
        <a>
          { props.article.title }
        </a>
      </Link>
    </h3>
    <style jsx>{`
      article {
        margin: 32px 0;
      }

      time {
        color: var(--c-purple-light);
        font-size: 12px;
        font-weight: 700;
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
    `}</style>
  </article>
};
