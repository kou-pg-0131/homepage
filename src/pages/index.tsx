import React from 'react';
import styles from './index.module.scss';
import Layout from '../layout';
import { SocialList } from '../components';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className={styles.about}>
        <div className={styles.about__user}>
          <img src='/profile.png' alt='Koki Sato' width={150}/>
          <p>Koki Sato</p>
        </div>
        <p className={styles.about__tagline}>Developer</p>
        <SocialList/>
      </div>
    </Layout>
  );
};

export default Home;
