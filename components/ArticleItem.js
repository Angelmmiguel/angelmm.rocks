import Link from 'next/link';

// Article
export default props => (
  <article>
    <time>{ props.article.published }</time>
    <h3>
      <Link href={ `/article?id=${props.article.id}` } as={ props.article.path }>
        <a>{ props.article.title }</a>
      </Link>
    </h3>
    <style jsx>{`
      time {
        color: var(--c-text-light);
        font-size: 12px;
        font-weight: bold;
      }

      h3 {
        font-size: 32px;
        font-weight: 400;
        position: relative;
        margin-top: 0;
      }

      h3 a {
        background-color: var(--c-background);
        padding-right: 1rem;
      }

      h3:after {
        background-color: var(--c-pink-light);
        content: '';
        height: 1px;
        width: 100%;
        left: 0;
        top: 50%;
        position: absolute;
        z-index: -1;
      }
    `}</style>
  </article>
);
