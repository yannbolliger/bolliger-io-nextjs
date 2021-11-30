import Head from "next/head"
import { AppProps } from "next/app"

import { colors } from "../styled"
import GlobalStyle from "../styled/GlobalStyle"

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="favicon/safari-pinned-tab.svg"
        color={colors.primary}
      />
      <meta name="apple-mobile-web-app-title" content="Bolliger Studios" />
      <meta name="application-name" content="Bolliger Studios" />
      <meta name="msapplication-TileColor" content={colors.primary} />
      <meta name="theme-color" content={colors.primary} />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default App
