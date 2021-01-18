import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import styles from './index.module.scss';
import { ExternalLink } from '..';

type Props = {
  imgSrc: string;
  name: string;
  href: string;
};

export const SkillCard: React.FC<Props> = (props: Props) => {
  return (
    <ExternalLink className={styles.link} href={props.href}>
      <Card className={styles.card}>
        <CardContent>
          <img className={styles.img} src={props.imgSrc} alt={props.name}/>
          <div className={styles.name}>
            {props.name}
          </div>
        </CardContent>
      </Card>
    </ExternalLink>
  );
};
