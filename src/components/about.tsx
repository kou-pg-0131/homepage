import React from 'react';
import styles from './about.module.scss';

export const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__user}>
        <img src='/profile.png' alt='Koki Sato' width={150}/>
        <p>Koki Sato</p>
      </div>
      <p className={styles.about__tagline}>Developer</p>
    </div>
  );
};
