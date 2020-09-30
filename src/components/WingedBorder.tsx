import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

const WING_SIZE = 15;

interface StyleProps {
  reverseRow: boolean;
  alignTop: boolean;
}

interface WingedBorderType {
  position: 'left' | 'right';
  direction: 'up' | 'down';
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      flexDirection: (props: StyleProps) =>
        props.reverseRow ? 'row-reverse' : 'row',
      paddingRight: (props: StyleProps) => (props.reverseRow ? 0 : '2%'),
      paddingLeft: (props: StyleProps) => (props.reverseRow ? '2%' : 0),
      alignItems: (props: StyleProps) =>
        props.alignTop ? 'flex-start' : 'flex-end',
    },
    line: {
      height: 2,
      flexGrow: 1,
      background: theme.palette.border.dark,
    },
    wing: {
      strokeWidth: 2,
      stroke: theme.palette.border.dark,
    },
  }),
  {
    classNamePrefix: 'winged-border',
  }
);

const WingedBorder: FunctionComponent<WingedBorderType> = ({
  position,
  direction,
}) => {
  const leftSide = position === 'left';
  const wingDown = direction === 'down';
  const styleProps: StyleProps = {
    reverseRow: leftSide,
    alignTop: wingDown,
  };
  const classes = useStyles(styleProps);

  let y1;
  let y2;
  if ((wingDown && !leftSide) || (!wingDown && leftSide)) {
    // Wing diagonal down
    y1 = 0;
    y2 = WING_SIZE;
  } else {
    // Wing diagonal up
    y1 = WING_SIZE;
    y2 = 0;
  }

  return (
    <div className={classes.root}>
      <div className={classes.line} />
      <svg height={WING_SIZE} width={WING_SIZE}>
        <line x1={0} y1={y1} x2={WING_SIZE} y2={y2} className={classes.wing} />
      </svg>
    </div>
  );
};
export default WingedBorder;
