import React from 'react';
import { AppProps } from 'next/app';
import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: 'Raleway, sans-serif',
        },
        a: {
          color: '#000',
          textDecoration: 'none',
        },
        img: {
          maxWidth: '100%',
        },
        p: {
          margin: 0,
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
