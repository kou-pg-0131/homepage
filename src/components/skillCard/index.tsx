import React from 'react';
import { Card, CardActionArea, CardContent } from '@material-ui/core';
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
      <Card>
        <CardActionArea>
          <CardContent className={styles.content}>
            <img className={styles.img} src={props.imgSrc} alt={props.name}/>
            <div className={styles.name}>
              {props.name}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </ExternalLink>
  );
};
