import React from 'react';
import search from '../../../img/search.png';
import notification from '../../../img/notification.png';
import styled from 'styled-components';
import Flex from '../../Flex';
import LogoutButton from '../../Button/LogoutButton';

const Header = ({className}) =>{

  const Wrapper = styled(Flex)`
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
  `

  const Icon = styled.img`
    margin: 0 12px; 
    cursor: pointer;
  `
  const HeaderButton = styled(LogoutButton)`
    margin: ${(props)=>`${props.theme.gutter.xs} ${props.theme.gutter.md}`};
  `

  return (
  <Wrapper className={className}>
      <Icon src={search} alt="search icon" />
      <Icon src={notification} alt="notification icon" />
      <HeaderButton>LOGOUT</HeaderButton>
  </Wrapper>
  )
}

export default Header;