import React, { FunctionComponent } from 'react';
import useTitle from '../../hooks/useTitle';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';

const Homepage: FunctionComponent = () => {
  useTitle();

  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
};
export default Homepage;
