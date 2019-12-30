import React from 'react';
import styled from 'styled-components';
import SavingsGraph from './SavingsGraph';
import SavingsStats from './SavingsStats';
import SavingsInputs from './SavingsInputs';

const Savings = () => {
  return(
    <SectionWrap>
      <RowWrap>
        <SavingsGraph />
        <SavingsStats />
      </RowWrap>
      <RowWrap>
        <SavingsInputs />
      </RowWrap>
    </SectionWrap>
  )
}

export default Savings;

const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`