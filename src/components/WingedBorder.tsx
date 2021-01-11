import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

const WING_SIZE = 15;

interface StyleProps {
  alignTop: boolean;
  length: number;
  left: boolean;
  right: boolean;
}

interface WingedBorderProps {
  direction: 'up' | 'down';
  left?: boolean;
  right?: boolean;
  className?: string;
  length?: number;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      paddingRight: (props: StyleProps) =>
        props.right ? `${props.length}%` : 0,
      paddingLeft: (props: StyleProps) => (props.left ? `${props.length}%` : 0),
      alignItems: (props: StyleProps) =>
        props.alignTop ? 'flex-start' : 'flex-end',
    },
    line: {
      height: 2,
      flexGrow: 1,
      background: theme.palette.border.main,
    },
    wing: {
      strokeWidth: 2,
      stroke: theme.palette.border.main,
    },
  }),
  {
    classNamePrefix: 'winged-border',
  }
);

const WingedBorder: FunctionComponent<WingedBorderProps> = ({
  direction,
  left = false,
  right = false,
  className,
  length = 98,
}) => {
  const wingDown = direction === 'down';
  const styleProps: StyleProps = {
    alignTop: wingDown,
    length: 100 - length,
    left,
    right,
  };
  const classes = useStyles(styleProps);

  // Wing diagonal up
  let wingStart = WING_SIZE;
  let wingEnd = 0;
  if (wingDown) {
    // Wing diagonal down
    wingStart = 0;
    wingEnd = WING_SIZE;
  }

  return (
    <div className={clsx(classes.root, className)}>
      {left && (
        <svg height={WING_SIZE} width={WING_SIZE}>
          <line
            x1={0}
            y1={wingEnd}
            x2={WING_SIZE}
            y2={wingStart}
            className={classes.wing}
          />
        </svg>
      )}
      <div className={classes.line} />
      {right && (
        <svg height={WING_SIZE} width={WING_SIZE}>
          <line
            x1={0}
            y1={wingStart}
            x2={WING_SIZE}
            y2={wingEnd}
            className={classes.wing}
          />
        </svg>
      )}
    </div>
  );
};
export default WingedBorder;
