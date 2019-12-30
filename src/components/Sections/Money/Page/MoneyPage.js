import React from 'react';
import styled from 'styled-components';
import Budget from './Budget/Budget';
import Savings from './Savings/Savings';
import { graphql, useStaticQuery } from "gatsby";
// import Img from 'gatsby-image';   // I don't know why it didn't work, but it just didn't :(

const MoneyPage = () => {
  const contentfulTest = useStaticQuery(graphql`
    {
      allContentfulAsset {
        edges {
          node {
            file {
              url
            }
          }
        }
      }
    }
    `).allContentfulAsset.edges[0].node.file.url;

  console.log(contentfulTest);

  return (
    <PageWrap>
      <Budget />
      <Savings />
      {/* <Img src={contentfulTest} alt="contentful test image" /> */}
      <StyledImage src={contentfulTest} alt="contentful test" />
    </PageWrap>
  );
}

export default MoneyPage;


const PageWrap = styled.div`
  margin: 5% 0;
  width: 100%;
`

const StyledImage = styled.img`
  width: 250px;
  height: 150px;
`