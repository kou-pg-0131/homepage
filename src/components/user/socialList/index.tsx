import React from 'react';
import styles from './index.module.scss';

type Props = {
  items: {
    href: string;
    icon: React.ReactNode;
  }[];
};

export const SocialList: React.FC<Props> = (props: Props) => {
  return (
    <ul className={styles.root}>
      {props.items.map(item => (
        <li key={item.href} className={styles.item}>
          <a className={styles.itemLink} href={item.href} target='_blank' rel='noopener noreferrer'>
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
