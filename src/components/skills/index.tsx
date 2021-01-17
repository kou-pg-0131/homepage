import React from 'react';
import styles from './index.module.scss';
import { SkillCardList } from './skillCardList';

type Item = {
  name: string;
  href: string;
  imgSrc: string;
};

type Props = {
  items: {
    languages: Item[];
  };
};

export const Skills: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.skills}>
      <h3 className={styles.skills__category}>Languages</h3>
      <SkillCardList items={props.items.languages}/>
    </div>
  );
};
