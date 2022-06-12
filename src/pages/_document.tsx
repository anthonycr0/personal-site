import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="A Designer. An Engineer. A Foodie. These are not three separate people." />
        <meta name="keywords" content="Anthony Roberts, Software Engineer, UNIHACK, Streamee, Quick Maths" />
        <meta name="author" content="Anthony Roberts" />

        <meta property='og:title' content="Anthony Roberts" />
        <meta property='og:description' content="A Designer. An Engineer. A Foodie. These are not three separate people." />
        <meta property='og:image' content="https://anthonycr.me/Images/og-image.png" />
        <meta property='og:url' content="https://anthonycr.me" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@anthonycr0" />
        <meta name="twitter:title" content="Anthony Roberts | The Collection" />
        <meta name="twitter:description" content="A Designer. An Engineer. A Foodie. These are not three separate people." />
        <meta name="twitter:image" content="https://anthonycr.me/Images/og-image.png" />

        <link rel="apple-touch-icon" sizes="180x180" href="https://anthonycr.me/favicons/apple-touch-icon.png?v=oLBBWvXEmr" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://anthonycr.me/favicons/favicon-32x32.png?v=oLBBWvXEmr" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://anthonycr.me/favicons/favicon-16x16.png?v=oLBBWvXEmr" />
        <link rel="manifest" href="https://anthonycr.me/favicons/site.webmanifest?v=oLBBWvXEmr" />
        <link rel="mask-icon" href="https://anthonycr.me/favicons/safari-pinned-tab.svg?v=oLBBWvXEmr" color="#000000" />
        <link rel="shortcut icon" href="https://anthonycr.me/favicons/favicon.ico?v=oLBBWvXEmr" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="https://anthonycr.me/favicons/browserconfig.xml?v=oLBBWvXEmr" />
        <meta name="theme-color" content="#000000"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}