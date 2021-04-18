import React from 'react';
import { Card, CardActionArea, CardContent, Grid } from '@material-ui/core';
import styles from './index.module.scss';
import { ExternalLink } from '..';
import { Skill } from '../../domain';

type Props = {
  skill: Skill;
};

export const SkillCardListItem: React.VFC<Props> = (props: Props) => {
  return (
    <Grid item xs={6} sm={3}>
      <ExternalLink className={styles.link} href={props.skill.href}>
        <Card>
          <CardActionArea>
            <CardContent className={styles.content}>
              <img className={styles.img} src={props.skill.imgSrc} alt={props.skill.name}/>
              <div className={styles.name}>
                {props.skill.name}
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </ExternalLink>
    </Grid>
  );
};
