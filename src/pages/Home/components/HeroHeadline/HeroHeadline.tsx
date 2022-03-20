import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import useInterval from '@/hooks/useInterval';

const ScrollTextContainer = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: 83%;
  font-size: inherit;
  vertical-align: top;
  min-width: 230px;
  white-space: nowrap;

  @media screen and (min-width: 800px) {
    min-width: 510px;
  }
`;

const appear = keyframes`
 0% {
    transform: translateY(100%);
  }

  50% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(0);
  }
`;

const TextAppear = styled.span`
  position: relative;
  display: block;
  top: 0;
  animation: ${appear} 2.5s ease-in-out;
  color: var(--primary);
`;

const disappear = keyframes`
    0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-100%);
    opacity: 0;
  }

  70% {
    transform: translateY(-100%);
    opacity: 0;
  }

  100% {
    transform: translateY(-100%);
    opacity: 0;
  }  
`;

const TextDisappear = styled.span`
  position: absolute;
  display: block;
  top: 0;
  animation: ${disappear} 2.5s ease-in-out;
  color: var(--primary);
`;

const list = [
  {
    name: 'Ethereum',
  },
  {
    name: 'Ethereum Classic',
  },
  {
    name: 'Chia',
  },
];

const HeroHeadLineContainer = styled.div`
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 700;
  color: white;
  line-height: 2.75rem;
  letter-spacing: -0.02em;

  @media screen and (min-width: 800px) {
    font-size: 3.5rem;
    line-height: 4.2rem;
  }
`;

const HeroHeadline = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => {
      return (c + 1) % 3;
    });
  }, 2500);

  return (
    <HeroHeadLineContainer>
      Building the future of mining pools
      <br />
      for{' '}
      <ScrollTextContainer>
        <TextDisappear key={count - 1}>
          {list[(3 + (count - 1)) % 3].name}
        </TextDisappear>
        <TextAppear key={count}>{list[count].name}</TextAppear>
      </ScrollTextContainer>
    </HeroHeadLineContainer>
  );
};

export default HeroHeadline;