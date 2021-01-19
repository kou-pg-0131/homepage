import React from 'react';
import styles from './index.module.scss';
import { ExternalLink } from '..';
import { Card, CardContent, CardActionArea, CardActions, Button, CardMedia, Grid } from '@material-ui/core';
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
        <CardContent className={styles.content}>
          <p className={styles.title}>{props.portfolio.title}</p>
          <p>{props.portfolio.description}</p>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            href={props.portfolio.githubUrl}
            target='_blank'
            rel='noreferrer noopener'
          >
            View on GitHub
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
