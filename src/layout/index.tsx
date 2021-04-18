import React from 'react';
import styles from './index.module.scss';
import Head from 'next/head';
import { Header } from './header';
import { Footer } from './footer';

type Props = {
  children: React.ReactNode;
  title?: string;
  hideMenu?: boolean;
};

export const Layout: React.VFC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>{props.title && `${props.title} | `}Koki Sato</title>
      </Head>
      <Header hideMenu={props.hideMenu}/>
      <main className={styles.main}>
        {props.children}
      </main>
      <Footer/>
    </React.Fragment>
  );
};
