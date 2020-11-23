import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { Typography } from '@material-ui/core';
import MarkdownLink from './MarkdownLink';

interface MarkdownType {
  children: string;
}

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h5',
      },
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' },
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: 'caption', paragraph: true },
    },
    p: { component: Typography, props: { paragraph: true } },
    a: { component: MarkdownLink },
  },
};

const Markdown: FunctionComponent<MarkdownType> = (props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ReactMarkdown options={options} {...props} />;
};
export default Markdown;
