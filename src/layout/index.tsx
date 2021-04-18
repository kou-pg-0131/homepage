import React from 'react';
import Head from 'next/head';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Header } from './header';
import { Footer } from './footer';

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
    <>
      <Head>
        <title>{props.title && `${props.title} | `}Koki Sato</title>
      </Head>
      <Header hideMenu={props.hideMenu}/>
      <main className={classes.main}>
        {props.children}
      </main>
      <Footer/>
    </>
  );
};
