import React from 'react';
import styles from './socialList.module.scss';

type Props = {
  items: {
    href: string;
    icon: React.ReactNode;
  }[];
};

export const SocialList: React.FC<Props> = (props: Props) => {
  return (
    <ul className={styles.socials}>
      {props.items.map(item => (
        <li key={item.href} className={styles.socials__item}>
          <a className={styles.socials__itemLink} href={item.href} target='_blank' rel='noopener noreferrer'>
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
