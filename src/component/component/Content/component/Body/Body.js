import React from 'react';
import styled from 'styled-components';
import Flex from '../../../../Flex';

const Shadow =styled.div`
background-color: ${(props)=>props.theme.backgroundColor.homepage};
border: 1px solid white;
`

const StyledBody = styled(Flex)`
  padding:${(props)=>`${props.theme.gutter.lg} 0`};
  margin: ${(props)=>`${props.theme.gutter.lg} ${props.theme.gutter.lg} 0 ${props.theme.gutter.lg}`};
  align-items: center;
  background-color: white;
  min-height: 550px;
  flex-direction: column;
`

const Body = ({
  children
}) =>(
  <Shadow>
    <StyledBody>
      {children}
    </StyledBody>
  </Shadow>
)

export default Body;