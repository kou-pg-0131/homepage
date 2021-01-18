import React from 'react';
import Head from 'next/head';
import { Footer } from './footer';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Koki Sato</title>
      </Head>
      <main>
        {props.children}
      </main>
      <Footer/>
    </React.Fragment>
  );
};
