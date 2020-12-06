import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'markdown-to-jsx';
import { Typography } from '@material-ui/core';
import MarkdownLink from './MarkdownLink';

interface MarkdownProps {
  children: string;
}

const useStyles = makeStyles(
  () => ({
    heading: {
      marginTop: '2rem',
      marginBottom: '1rem',
    },
  }),
  {
    classNamePrefix: 'markdown',
  }
);

const Markdown: FunctionComponent<MarkdownProps> = (props) => {
  const classes = useStyles();

  const options = {
    overrides: {
      h1: {
        component: Typography,
        props: {
          gutterBottom: true,
          variant: 'h4',
          className: classes.heading,
        },
      },
      h2: {
        component: Typography,
        props: { gutterBottom: true, variant: 'h5' },
      },
      h3: {
        component: Typography,
        props: { gutterBottom: true, variant: 'h6' },
      },
      h4: {
        component: Typography,
        props: { gutterBottom: true, variant: 'subtitle1', paragraph: true },
      },
      p: { component: Typography, props: { paragraph: true } },
      a: { component: MarkdownLink },
    },
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ReactMarkdown options={options} {...props} />;
};
export default Markdown;
