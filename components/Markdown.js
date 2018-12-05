// Markdown content
export default (props) => (
  <div>
    <main className="markdown">
      <props.Content />
    </main>
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

      .markdown p code {
        background-color: var(--c-purple-background);
        border-radius: 5px;
        color: var(--c-pink);
        display: inline-block;
        font-size: .9em;
        padding: 0 .25em;
      }
    `}</style>
  </div>
)
