import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

const WING_WIDTH = 2;
const WING_SIZE = 15;

interface StyleProps {
  reverseRow: boolean;
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
    },
    line: {
      height: 2,
      margin: `${WING_SIZE}px 0`,
      flexGrow: 1,
      background: theme.palette.border.dark,
    },
    wing: {
      strokeWidth: WING_WIDTH,
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
  const styleProps: StyleProps = {
    reverseRow: position === 'left',
  };
  const classes = useStyles(styleProps);

  const svgHeight = WING_SIZE * 2 + WING_WIDTH;
  const halfSvgHeight = svgHeight / 2;

  let lineYEnd;
  let lineYStart;
  if (position === 'left') {
    lineYStart = direction === 'down' ? svgHeight : '0';
    lineYEnd = halfSvgHeight;
  } else {
    lineYStart = halfSvgHeight;
    lineYEnd = direction === 'down' ? svgHeight : '0';
  }

  return (
    <div className={classes.root}>
      <div className={classes.line} />
      <svg height={svgHeight} width={WING_SIZE}>
        <line
          x1="0"
          y1={lineYStart}
          x2={WING_SIZE}
          y2={lineYEnd}
          className={classes.wing}
        />
      </svg>
    </div>
  );
};
export default WingedBorder;
