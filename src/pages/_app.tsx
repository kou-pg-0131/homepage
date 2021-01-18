import React from 'react';
import { AppProps } from 'next/app';
import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#161616',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: 'Raleway, sans-serif',
        },
        a: {
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
