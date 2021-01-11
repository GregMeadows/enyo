import React, { FunctionComponent } from 'react';
import { useInView } from 'react-intersection-observer';

export interface OnViewChildProps {
  show: boolean;
  delay?: number;
}

interface OnViewProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: FunctionComponent<any>;
  className?: string;
}

const OnView: FunctionComponent<OnViewProps> = ({
  component,
  className,
  children,
}) => {
  const [viewRef, inView] = useInView({
    threshold: 0.6,
  });

  const props: OnViewChildProps = {
    show: inView,
  };

  return (
    <div ref={viewRef} className={className}>
      {React.createElement(component, props, children)}
    </div>
  );
};

export default OnView;
