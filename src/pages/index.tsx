import React from 'react';
import Layout from '../layout';
import { About, SocialList } from '../components';

const Home: React.FC = () => {
  return (
    <Layout>
      <section>
        <About/>
      </section>

      <section>
        <SocialList/>
      </section>
    </Layout>
  );
};

export default Home;
