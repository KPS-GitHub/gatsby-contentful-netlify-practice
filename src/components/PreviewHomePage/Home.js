import React from 'react';
import styled from 'styled-components';

const pages = ["Money", "Calories", "Goals", "Fun"];

const Home = () => {
  return (
    <OuterWrap>
      <MainWrap>
        <StyledRow>
          {pages.map(page => {
            return(
              <StyledSection href={`/`+page}>
                  {page}
              </StyledSection>
            );
          })}
        </StyledRow>
      </MainWrap>
    </OuterWrap>
  );
}

export default Home;


const OuterWrap = styled.div`
  margin: 20rem 20px 20px 20px;
`

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 50px;
`

const StyledSection = styled.a`
  position: relative;
  width: 90%;
  height: 20rem;
  margin: .5rem;
  padding: .5rem;
  background: red;
  border: 5px solid black;
  transform(1,1);
  -webkit-transition: transform .5s;
  transition: transform .5s;
  color: black;
  text-decoration: none;
  :hover {
    transform: scale(1.1,1.2);
    -webkit-transition: transform .5s;
    transition: transform .5s;
  }
`