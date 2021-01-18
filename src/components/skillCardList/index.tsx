import React from 'react';
import styles from './index.module.scss';
import { Grid } from '@material-ui/core';
import { SkillCard } from '../';

type Props = {
  items: {
    name: string;
    imgSrc: string;
    href: string;
  }[];
};

export const SkillCardList: React.FC<Props> = (props: Props) => {
  return (
    <Grid container spacing={2}>
      {props.items.map(item => (
        <Grid key={item.name} item className={styles.itemContainer} xs={6} sm={4} md={3}>
          <SkillCard
            href={item.href}
            name={item.name}
            imgSrc={item.imgSrc}
          />
        </Grid>
      ))}
    </Grid>
  );
};
