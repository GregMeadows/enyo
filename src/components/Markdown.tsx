import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { Typography } from '@material-ui/core';
import MarkdownLink from './MarkdownLink';
import Expand from './Expand';

interface MarkdownProps {
  children: string;
}

const Markdown: FunctionComponent<MarkdownProps> = (props) => {
  const options = {
    overrides: {
      h1: {
        component: Typography,
        props: { gutterBottom: true, variant: 'h2' },
      },
      h2: {
        component: Typography,
        props: { gutterBottom: true, variant: 'h3' },
      },
      h3: {
        component: Typography,
        props: { gutterBottom: true, variant: 'h4' },
      },
      h4: {
        component: Typography,
        props: { gutterBottom: true, variant: 'subtitle1', paragraph: true },
      },
      p: { component: Typography, props: { paragraph: true } },
      a: { component: MarkdownLink },
      Expand: { component: Expand },
    },
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ReactMarkdown options={options} {...props} />;
};
export default Markdown;
