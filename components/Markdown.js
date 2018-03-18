// Markdown content
export default (props) => (
  <div>
    <div className="markdown" dangerouslySetInnerHTML={ props.markdown } />
    <style jsx global>{`
      .markdown {
        font-size: 18px;
        line-height: 1.5;
      }

      .markdown p {
        margin: .75em 0 1em;
      }
    `}</style>
  </div>
)
