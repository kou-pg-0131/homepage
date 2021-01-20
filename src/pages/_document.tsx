import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}
          {process.env.NEXT_PUBLIC_ENV === 'production' && (
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

          <meta property="og:site_name"   content="Koki Sato"/>
          <meta property="og:title"       content="Koki Sato"/>
          <meta property="og:description" content=""/>
          <meta property="og:url"         content="https://kou-pg.com"/>
          <meta property="og:image"       content="https://kou-pg.com/images/profile.jpg"/>
          <meta property="og:type"        content="website"/>
          <meta property="og:locale"      content="ja_JP"/>
          <meta property="twitter:card"   content="summary"/>
          <meta property="twitter:site"   content="@kou_pg_0131"/>
          <meta property="fb:app_id"      content="889570964422469"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}
