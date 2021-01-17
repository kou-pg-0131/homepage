import React from 'react';
import styles from './index.module.scss';
import { SkillCardList } from './skillCardList';
import { Skill } from '../../lib/skills';

type Props = {
  skills: {
    [category:string]: Skill[];
  };
};

export const Skills: React.FC<Props> = (props: Props) => {
  return (
    <div>
      {Object.entries(props.skills).map(([category, skills]) => (
        <React.Fragment key={category}>
          <h3 className={styles.category}>{category}</h3>
          <SkillCardList items={skills}/>
        </React.Fragment>
      ))}
    </div>
  );
};
