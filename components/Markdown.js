// Markdown content
export default (props) => (
  <div>
    <div className="markdown" dangerouslySetInnerHTML={ props.markdown } />
    <style jsx global>{`
      .markdown {
        font-size: 18px;
        line-height: 1.618;
      }

      .markdown p {
        margin: .75em 0 1em;
      }

      .markdown img {
        box-shadow: 10px 10px 0 0 var(--c-purple-shadow);
        display: block;
        margin: 0 auto;
        max-width: 720px;
        width: 100%;
      }

      .markdown blockquote {
        border-left: 3px solid var(--c-pink);
        color: #514f54;
        margin: 1em 0;
        padding-left: 1.5em;
      }

      .markdown blockquote p {
        margin: .25em 0;
      }
    `}</style>
  </div>
)
