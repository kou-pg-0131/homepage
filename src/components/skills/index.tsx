import React from 'react';
import styles from './index.module.scss';
import { SkillCardList } from './skillCardList/index';
import { Skill } from '../../lib/skills';

type Props = {
  skills: {
    languages: Skill[];
    frameworks: Skill[];
    rdb_nosql: Skill[];
    ci_cd: Skill[];
    other: Skill[];
  };
};

export const Skills: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.skills}>
      {Object.entries(props.skills).map(([category, skills]) => (
        <React.Fragment key={category}>
          <h3 className={styles.skills__category}>{category}</h3>
          <SkillCardList items={skills}/>
        </React.Fragment>
      ))}
    </div>
  );
};
