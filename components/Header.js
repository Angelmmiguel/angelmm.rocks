import Link from 'next/link';

// Main header
export default () => {
  return <header className="container">
    <div className="content">
      <div className="logo">
        <Link href="/">
          <a>
            <img src="/static/images/logo.svg" alt="Angelmm.rocks logo" />
          </a>
        </Link>
      </div>
      <nav>
        <Link href="/articles">
          <a>Blog</a>
        </Link>
        <Link href="/">
          <a>Projects</a>
        </Link>
        <Link href="/">
          <a>Photography</a>
        </Link>
        <Link href="/">
          <a>Videogames</a>
        </Link>
      </nav>
    </div>
    <style jsx>{`
      .content {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 2rem 0;
      }

      a {
        color: var(--c-purple-transparent);
        font-size: 18px;
        font-weight: bold;
        margin-right: 1rem;
        text-shadow: 2px 2px 0 var(--c-pink-transparent);
        text-transform: uppercase;
      }

      nav a:last-child {
        margin-right: 0;
      }
    `}</style>
  </header>;
};
