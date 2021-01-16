import React from 'react';
import { AppProps } from 'next/app';
import { CssBaseline } from '@material-ui/core';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Component {...pageProps}/>
    </React.Fragment>
  );
};

export default App;
