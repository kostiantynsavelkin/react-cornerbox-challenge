// pages/index.tsx
import React from 'react';
import CornerBox from '../components/CornerBox';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '2em' }}>
      <h1>Welcome to the CornerBox Demo</h1>
      <CornerBox
        topLeft="boxed"
        topRight="angled"
        bottomLeft="angled"
        bottomRight="boxed"
        topLeftSize="1em"
        topRightSize="1em"
        bottomLeftSize="1em"
        bottomRightSize="1em"
        backgroundColor="lightblue"
        borderColor="blue"
      >
        This is the customizable CornerBox.
      </CornerBox>
    </div>
  );
};

export default Home;
