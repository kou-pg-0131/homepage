import React from 'react';
import styles from './index.module.scss';

type Props = {
  name: string;
  imgSrc: string;
};

export const User: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.user}>
        <img className={styles.img} src='/images/profile.png' alt={props.name}/>
        <p className={styles.name}>Koki Sato</p>
      </div>
      <p className={styles.tagline}>Developer</p>
    </div>
  );
};
