import React from 'react';
import { PortfolioCard } from '..';
import { Grid } from '@material-ui/core';

type Props = {
  portfolios: {
    title: string;
    description: string;
    imgSrc?: string;
    url: string;
    githubUrl: string;
  }[];
};

export const PortfolioCardList: React.FC<Props> = (props: Props) => {
  return (
    <Grid container spacing={4}>
      {props.portfolios.map(portfolio => (
        <Grid key={portfolio.title} item xs={12}>
          <PortfolioCard
            title={portfolio.title}
            description={portfolio.description}
            imgSrc={portfolio.imgSrc}
            url={portfolio.url}
            githubUrl={portfolio.githubUrl}
          />
        </Grid>
      ))}
    </Grid>
  );
};
