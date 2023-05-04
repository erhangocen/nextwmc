import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
        <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#004226" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="We enhance your social media presence, perfect your search engine rank, prepare a digital strategy and leverage automated client acquisition systems for you."
        />
        <meta name="author" content="Western Money" />
        <meta name="publisher" content="Erhan Gocen" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WMC_Agency" />
        <meta name="twitter:title" content="Western Money Consulting" />
        <meta
          name="twitter:description"
          content="Guaranteed RESULTS or Payback."
        />
        <meta
          name="twitter:image"
          content="/logo.png"
        />

        <meta property="og:title" content="Western Money Consulting" />
        <meta
          property="og:description"
          content="We enhance your social media presence, perfect your website and search engine rank, prepare a digital strategy and leverage automated client acquisition systems for you to see a minimum 5x in your return on investment under 30 days, or your money back."
        />
        <meta property="og:url" content="https://westernmoney.consulting/" />
        <meta
          property="og:image"
          content="/logo.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="https://westernmoney.consulting/"
        />
        <link rel='canonical' href='https://www.westernmoney.consulting/' />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <title>Western Money Consulting</title>
        </Head>
        <body>
        
            <Main/>
            <NextScript />
        </body>
    </Html>
  )
}