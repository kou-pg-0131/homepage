import React from 'react';
import { Card, CardActionArea, CardContent, Grid } from '@material-ui/core';
import styles from './index.module.scss';
import { ExternalLink } from '..';

type Props = {
  imgSrc: string;
  name: string;
  href: string;
};

export const SkillCardListItem: React.FC<Props> = (props: Props) => {
  return (
    <Grid item xs={6} sm={3}>
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
    </Grid>
  );
};