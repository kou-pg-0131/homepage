import React from 'react';
import styles from './index.module.scss';
import { Social } from '../../domain';
import { ExternalLink } from '..';

type Props = {
  social: Social;
};

export const SocialListItem: React.VFC<Props> = (props: Props) => {
  return (
    <li className={styles.listItem}>
      <ExternalLink className={styles.link} href={props.social.href}>
        <img className={styles.img} src={props.social.imgSrc} alt={props.social.name}/>
      </ExternalLink>
    </li>
  );
};
