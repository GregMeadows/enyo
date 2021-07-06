import React, { FunctionComponent } from 'react';
import { fade, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface ExpandProps {
  title: string;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    accordian: {
      border: 'none',
      boxShadow: 'none',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      background: fade(theme.palette.background.paper, 0.8),
      '&$expanded': {
        minHeight: 56,
      },
    },
    TitleContent: {
      order: 1,
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expandIcon: {
      marginRight: 0,
      marginLeft: -12,
    },
    accordianSummary: {
      '&$expanded': {
        minHeight: 48,
      },
    },
    accordianDetails: {
      paddingTop: 0,
    },
    childrenContainer: {
      width: '100%',
    },
  }),
  {
    classNamePrefix: 'loading',
  }
);

const Expand: FunctionComponent<ExpandProps> = ({ title, children }) => {
  const classes = useStyles();

  // Use Body2 for Typography children
  const parsedChildren = React.Children.map(children, (child) => {
    if (
      React.isValidElement(child) &&
      (child as React.ReactElement<unknown>).type === Typography
    ) {
      return React.cloneElement(child, { variant: 'body2' });
    }
    return child;
  });

  return (
    <Accordion className={classes.accordian}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        IconButtonProps={{
          color: 'primary',
        }}
        className={classes.accordianSummary}
        classes={{
          content: classes.TitleContent,
          expandIcon: classes.expandIcon,
        }}
      >
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordianDetails}>
        <div className={classes.childrenContainer}>{parsedChildren}</div>
      </AccordionDetails>
    </Accordion>
  );
};
export default Expand;
