import React from 'react';
import styled from 'styled-components';
import Budget from './Budget/Budget';
import Savings from './Savings/Savings';

const MoneyPage = () => {
  return (
    <PageWrap>
      <Budget />
      <Savings />
    </PageWrap>
  );
}

export default MoneyPage;


const PageWrap = styled.div`
  margin: 5%;
  width: 100%;
`