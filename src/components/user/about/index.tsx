import React from 'react';
import styles from './index.module.scss';

export const About: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.user}>
        <img src='/images/profile.png' alt='Koki Sato' width={150}/>
        <p>Koki Sato</p>
      </div>
      <p className={styles.tagline}>Developer</p>
    </div>
  );
};
