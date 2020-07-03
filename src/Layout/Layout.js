import React from 'react';
import styled from 'styled-components';
import SideBar from '../component/component/SideBar';
import Header from '../component/component/Header';
import Content from '../component/component/Content';
import Flex from '../component/Flex';

const Layout = () => {

  const Wrapper =styled(Flex)`
    min-height: 100vh;
    flex-direction: row;
  `
  const Container = styled(Flex)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%
  `

  return(
   <Wrapper>
    <SideBar />
    <Container>
      <Header />
      <Content />
    </Container>
  </Wrapper>
  )
}

export default Layout;