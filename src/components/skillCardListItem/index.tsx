import React from 'react';
import { Card, CardActionArea, CardContent, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ExternalLink } from '..';
import { Skill } from '../../domain';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: 'block',
      width: '100%',
    },
    content: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    img: {
      marginBottom: theme.spacing(2),
      width: 60,
      height: 60,
    },
    name: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
  }),
);

type Props = {
  skill: Skill;
};

export const SkillCardListItem: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={3}>
      <ExternalLink className={classes.link} href={props.skill.href}>
        <Card>
          <CardActionArea>
            <CardContent className={classes.content}>
              <img className={classes.img} src={props.skill.imgSrc} alt={props.skill.name}/>
              <div className={classes.name}>
                {props.skill.name}
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </ExternalLink>
    </Grid>
  );
};
