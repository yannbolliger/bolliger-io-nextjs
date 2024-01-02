import React from "react"
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document"
import { ServerStyleSheet } from "styled-components"

import fetchFontCss from "../api/fetchFontCss"

interface Props {
  fontCssString: string
}

class Doc extends Document<Props> {
  /**
   * from styled-components example of next.js App
   */
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      const fontCssString = await fetchFontCss()
      return {
        ...initialProps,
        fontCssString,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render = () => (
    <Html>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: this.props.fontCssString }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Doc
