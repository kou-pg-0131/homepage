import React from 'react';
import Head from 'next/head';
import { CssBaseline } from '@material-ui/core';
import { makeStyles, createStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Header } from './header';
import { Footer } from './footer';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: '"Open Sans", sans-serif',
          letterSpacing: 1,
        },
        a: {
          color: '#000000',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: '0.2s',
          '&:hover': {
            opacity: 0.5,
          },
        },
        ul: {
          listStyleType: 'none',
          padding: 0,
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#FFFFFF',
      dark: '#FAFAFA',
      contrastText: '#000000',
    },
  },
});

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      paddingTop: 80,
    },
  }),
);

type Props = {
  children: React.ReactNode;
  title?: string;
  hideMenu?: boolean;
};

export const Layout: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{props.title && `${props.title} | `}Koki Sato</title>
      </Head>
      <CssBaseline/>
      <Header hideMenu={props.hideMenu}/>
      <main className={classes.main}>
        {props.children}
      </main>
      <Footer/>
    </ThemeProvider>
  );
};
