import React from 'react';
import styles from './index.module.scss';
import { SkillCardList } from './skillCardList';
import { Skill } from '../../lib/skills';

type Props = {
  skills: {
    category: string;
    items: Skill[];
  }[];
};

export const Skills: React.FC<Props> = (props: Props) => {
  return (
    <div>
      {props.skills.map(item => (
        <React.Fragment key={item.category}>
          <h3 className={styles.category}>{item.category}</h3>
          <SkillCardList items={item.items}/>
        </React.Fragment>
      ))}
    </div>
  );
};
