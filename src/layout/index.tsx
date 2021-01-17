import React from 'react';
import Head from 'next/head';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Koki Sato</title>
      </Head>
      <div>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
