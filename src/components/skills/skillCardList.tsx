import React from 'react';
import styles from './skillCardList.module.scss';
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
    <Grid className={styles.skillCardList} container spacing={2}>
      {props.items.map(item => (
        <Grid key={item.name} item className={styles.skillCardList__itemContainer} xs={3}>
          <div className={styles.skillCardList__item}>
            <img className={styles.skillCardList__itemImg} src={item.imgSrc} alt={item.name}/>
            <div className={styles.skillCardList__itemName}>
              {item.name}
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};
