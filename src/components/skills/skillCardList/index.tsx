import React from 'react';
import styles from './index.module.scss';
import { Grid } from '@material-ui/core';

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
          <div className={styles.item}>
            <img className={styles.itemImg} src={item.imgSrc} alt={item.name}/>
            <div className={styles.itemName}>
              {item.name}
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};
