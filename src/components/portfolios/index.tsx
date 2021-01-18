import React from 'react';
import styles from './index.module.scss';
import { ExternalLink, Icon } from '..';

export const Portfolios: React.FC = () => {
  return (
    <div>
      <h3 className={styles.category}>Web Services</h3>
      <div>
        <ExternalLink href='https://nojov.kou-pg.com'>
          <h4 className={styles.itemTitle}>
            Nojov - プログラミング言語別求人数ビューア
            <Icon name='external-link'/>
          </h4>
        </ExternalLink>
        <ExternalLink href='https://nojov.kou-pg.com'>
          <img className={styles.itemImg} src="/images/portfolios/nojov.png" alt="Nojov - プログラミング言語別求人数ビューア"/>
        </ExternalLink>
      </div>
    </div>
  );
};
