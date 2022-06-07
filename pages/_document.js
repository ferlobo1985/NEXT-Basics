import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            <title>My awesome app</title>
        </Head>
        <body style={{background:'red'}}>
            <Main />
            <NextScript />
            <div>
                Footer
            </div>
        </body>
    </Html>
  )
}