import React from 'react';
import styles from './index.module.scss';
import Layout from '../layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className={styles.about}>
        <div className={styles.about__user}>
          <img src='/profile.png' alt='Koki Sato' width={150}/>
          <p>Koki Sato</p>
        </div>
        <p className={styles.about__tagline}>Developer</p>
        <ul className={styles.socials}>
          <li className={styles.socials__item}>
            <a className={styles.socials__itemLink} href='https://github.com/kou-pg-0131' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithubSquare}/>
            </a>
          </li>
          <li className={styles.socials__item}>
            <a className={styles.socials__itemLink} href='https://twitter.com/kou_pg_0131' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faTwitterSquare}/>
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
