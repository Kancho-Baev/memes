import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import HeadComponent from './document/head';

const Container = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 7rem;
`;

const Box = styled.div`
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: stretch;
  flex-direction: row;
  flex-wrap: wrap;
  border: 2px;
  padding: 1rem;
  margin-top: 7rem;
  min-width: 25rem;
  border-radius: 10px;
  background: #fefefe;
  box-shadow: 1px 2px 10px #00000059;
`;

const Layout = ({ hasFooter = true, children }) => {
  return (
    <>
      <Container>
        <HeadComponent label="Memes much?" favHref="nice.png" />
        <Box>{children}</Box>
        {hasFooter && <Footer />}
      </Container>
   
    </>
  );
};

export default Layout;
