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
        max-width: 720px;
        margin: 0 auto;
      }
    `}</style>
  </div>
)
