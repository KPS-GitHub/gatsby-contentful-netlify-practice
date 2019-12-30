import React from 'react';
import styled from 'styled-components';

const BudgetGraph = (props) => {
  console.log("props from BudgetGraph", props);

  const percentSpent = (props.data.totalSpent / props.data.monthlyBudget) * 100;
  return (
    <Wrap>
      <SpentBar style={{width: percentSpent+`%`}} >
        Spent: {props.data.totalSpent}
      </SpentBar>
      <RemainingBar style={{width: (100-percentSpent)+`%`, left: percentSpent+`%`}} >
        Remaining: {props.data.monthlyBudget - props.data.totalSpent}
      </RemainingBar>
    </Wrap>
  );
}

export default BudgetGraph;


const Wrap = styled.div`
  position: relative;
  height: 10rem;
  width: 50rem;
  background: green;
`

const SpentBar = styled.div`
  height: 100%;
  // width controlled by variable and inline styling
  background: red;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RemainingBar = styled.div`
  height: 100%;
  // width controlled by variable and inline styling
  background: green;
  position: absolute;
  top: 0;
  // left controlled by variable and inline styling
  display: flex;
  justify-content: center;
  align-items: center;
`