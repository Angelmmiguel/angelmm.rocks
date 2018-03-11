// Single article
export default props => {
  const d = new Date(props.article.firstPublishedAt);
  const strDate = d.toUTCString().split(' ').slice(0, 4).join(' ');

  return <article>
    <time>{ strDate }</time>
    <h3>
      <a href={ `https://medium.com/@angelmm/${props.article.uniqueSlug}` }>
        { props.article.title }
      </a>
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
