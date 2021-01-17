import React from 'react';
import Head from 'next/head';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      {props.children}
    </div>
  );
};

export default Layout;
