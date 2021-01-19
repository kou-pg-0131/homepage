import React from 'react';
import styles from './index.module.scss';
import { ExternalLink } from '..';
import { Card, CardHeader, CardContent, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import { Portfolio } from '../../domain';

type Props = {
  portfolio: Portfolio;
};

export const PortfolioCardListItem: React.FC<Props> = (props: Props) => {
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
        <CardHeader title={props.portfolio.title} titleTypographyProps={{ className: styles.title }}/>
        <CardContent className={styles.content}>
          <p>{props.portfolio.description}</p>
          <ExternalLink className={styles.githubLink} href={props.portfolio.githubUrl}>
            View on GitHub
          </ExternalLink>
        </CardContent>
      </Card>
    </Grid>
  );
};
