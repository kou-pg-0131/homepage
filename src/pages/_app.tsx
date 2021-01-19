import React from 'react';
import './_app.module.scss';
import { AppProps } from 'next/app';
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
          margin: 0,
        },
        ul: {
          listStyleType: 'none',
          padding: 0,
        },
      },
    },
  },
});

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Component {...pageProps}/>
    </ThemeProvider>
  );
};

export default App;
