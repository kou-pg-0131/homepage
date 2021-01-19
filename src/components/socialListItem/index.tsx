import React from 'react';
import styles from './index.module.scss';
import { ExternalLink } from '..';

type Props = {
  name: string;
  imgSrc: string;
  href: string;
};

export const SocialListItem: React.FC<Props> = (props: Props) => {
  return (
    <li className={styles.listItem}>
      <ExternalLink className={styles.link} href={props.href}>
        <img src={props.imgSrc} alt={props.name} width={40}/>
      </ExternalLink>
    </li>
  );
};
