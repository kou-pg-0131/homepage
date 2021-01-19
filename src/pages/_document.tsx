import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}
          {process.env.VERCEL_ENV === 'production' && (
            <React.Fragment>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                  `,
                }}
              >
              </script>
            </React.Fragment>
          )}
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}
