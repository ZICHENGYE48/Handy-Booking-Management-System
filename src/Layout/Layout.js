import React from 'react';
import styled from 'styled-components';
import BaseSideBar from '../component/component/SideBar';
import BaseHeader from '../component/component/Header';
import BaseContent from '../component/component/Content';
import Flex from '../component/Flex';

const SIDE_BAR_WIDTH = "208px";
const HEADER_HEIGHT = "64px";

const Wrapper =styled(Flex)`
  min-height: 100vh;
`

const SideBar = styled(BaseSideBar)`
  min-width: ${SIDE_BAR_WIDTH};
  position: fixed;
`

const Header = styled(BaseHeader)`
  position: fixed;
  right: 0; 
  top: 0;
  left: ${SIDE_BAR_WIDTH};
  height: ${HEADER_HEIGHT};
`

const Content = styled(BaseContent)`
  margin-top: ${HEADER_HEIGHT};
  margin-left: ${SIDE_BAR_WIDTH};
`

const Layout = () => (
   <Wrapper>
    <SideBar />
    <Header />
    <Content />
  </Wrapper>
)

export default Layout;