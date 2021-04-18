import React, { useEffect } from 'react';
import './global.scss';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: '"Open Sans", sans-serif',
          letterSpacing: 1,
        },
        a: {
          color: '#000',
          cursor: 'pointer',
          textDecoration: 'none',
        },
        img: {
          maxWidth: '100%',
        },
        p: {
          marginTop: 0,
        },
        ul: {
          listStyleType: 'none',
          padding: 0,
        },
      },
    },
  },
});

const App: React.VFC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENV === 'production') {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, { page_path: router.pathname });
    }
  }, [router.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Component {...pageProps}/>
    </ThemeProvider>
  );
};

export default App;
