import React from 'react';
import styles from './index.module.scss';
import { ExternalLink } from '..';

type Props = {
  imgSrc: string;
  name: string;
  href: string;
};

export const SkillCard: React.FC<Props> = (props: Props) => {
  return (
    <ExternalLink className={styles.root} href={props.href}>
      <img className={styles.img} src={props.imgSrc} alt={props.name}/>
      <div className={styles.name}>
        {props.name}
      </div>
    </ExternalLink>
  );
};
