import React from 'react';
import { ExternalLink } from '.';
import { Avatar, Card, CardContent, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { AvatarGroup } from '@material-ui/lab';
import { Portfolio, Skill } from '../domain';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      height: 300,
      [theme.breakpoints.down('lg')]: {
        height: 280,
      },
      [theme.breakpoints.down('md')]: {
        height: 200,
      },
    },
    avatarGroup: {
      marginBottom: theme.spacing(2),
    },
    avatarLink: {
      border: '1px solid #ddd !important',
      borderRadius: '50%',
    },
    avatar: {
      backgroundColor: '#fff',
      height: 25,
      width: 25,
    },
    avatarImg: {
      objectFit: 'fill',
    },
    content: {
      paddingTop: 0,
    },
    title: {
      fontSize: 22,
      margin: '7px 0',
    },
    description: {
      marginBottom: theme.spacing(2),
    },
    githubLink: {
      transition: '0.2s',
      '&:hover': {
        opacity: 0.5,
      },
    },
  }),
);

type Props = {
  portfolio: Portfolio;
};

export const PortfolioCardListItem: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card raised>
        {props.portfolio.imgSrc && props.portfolio.url && (
          <CardActionArea>
            <ExternalLink href={props.portfolio.url}>
              <CardMedia
                className={classes.img}
                image={props.portfolio.imgSrc}
              />
            </ExternalLink>
          </CardActionArea>
        )}
        <CardContent className={classes.content}>
          <h4 className={classes.title}>{props.portfolio.title}</h4>
          <AvatarGroup className={classes.avatarGroup} max={100}>
            {(props.portfolio.skills as unknown as Skill[]).sort((a, b) => a.name < b.name ? -1 : 1).map(skill => (
              <ExternalLink key={skill.name} className={classes.avatarLink} href={skill.href}>
                <Avatar className={classes.avatar} imgProps={{ className: classes.avatarImg }} src={skill.imgSrc} alt={skill.name}/>
              </ExternalLink>
            ))}
          </AvatarGroup>
          <p>{props.portfolio.description}</p>
          <ExternalLink className={classes.githubLink} href={props.portfolio.githubUrl}>
            View on GitHub
          </ExternalLink>
        </CardContent>
      </Card>
    </Grid>
  );
};
