import React from 'react';
import styles from './index.module.scss';

type Props = {
  children: React.ReactNode;
};

export const SocialList: React.FC<Props> = (props: Props) => {
  return (
    <ul className={styles.list}>
      {props.children}
    </ul>
  );
};
