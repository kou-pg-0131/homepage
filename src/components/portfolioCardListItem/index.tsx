import React from 'react';
import styles from './index.module.scss';
import { ExternalLink } from '..';
import { Avatar, Card, CardContent, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import { Portfolio, Skill } from '../../domain';

type Props = {
  portfolio: Portfolio;
};

export const PortfolioCardListItem: React.VFC<Props> = (props: Props) => {
  return (
    <Grid item xs={12}>
      <Card raised>
        {props.portfolio.imgSrc && props.portfolio.url && (
          <CardActionArea>
            <ExternalLink href={props.portfolio.url}>
              <CardMedia
                className={styles.img}
                image={props.portfolio.imgSrc}
              />
            </ExternalLink>
          </CardActionArea>
        )}
        <CardContent className={styles.content}>
          <h4 className={styles.title}>{props.portfolio.title}</h4>
          <AvatarGroup className={styles.avatarGroup} max={100}>
            {(props.portfolio.skills as unknown as Skill[]).sort((a, b) => a.name < b.name ? -1 : 1).map(skill => (
              <ExternalLink key={skill.name} className={styles.avatarLink} href={skill.href}>
                <Avatar className={styles.avatar} imgProps={{ className: styles.avatarImg }} src={skill.imgSrc} alt={skill.name}/>
              </ExternalLink>
            ))}
          </AvatarGroup>
          <p>{props.portfolio.description}</p>
          <ExternalLink className={styles.githubLink} href={props.portfolio.githubUrl}>
            View on GitHub
          </ExternalLink>
        </CardContent>
      </Card>
    </Grid>
  );
};
