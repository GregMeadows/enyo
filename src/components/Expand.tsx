import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
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
    },
    TitleContent: {
      order: 1,
    },
    expandIcon: {
      marginRight: 0,
      marginLeft: -12,
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
        classes={{
          content: classes.TitleContent,
          expandIcon: classes.expandIcon,
        }}
      >
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>{parsedChildren}</div>
      </AccordionDetails>
    </Accordion>
  );
};
export default Expand;
