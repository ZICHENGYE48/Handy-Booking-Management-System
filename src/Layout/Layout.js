import React from 'react';
import styled from 'styled-components';
import SideBar from '../component/component/SideBar';
import Header from '../component/component/Header';
import Content from '../component/component/Content';
import Flex from '../component/Flex';

const Layout = () => {

  const Wrapper =styled(Flex)`
    flex-direction: row;
    justify-content: space-between;
    min-height: 100vh;
  `
  return(
   <Wrapper>
    <SideBar />
    <Header />
    <Content />
    {/* <Footer /> */}
  </Wrapper>
  )
}

export default Layout;