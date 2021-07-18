import React, { FunctionComponent } from 'react';
import useTitle from '../../hooks/useTitle';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';

const Homepage: FunctionComponent = () => {
  useTitle();

  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};
export default Homepage;
