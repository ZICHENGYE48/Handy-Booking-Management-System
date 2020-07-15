import React from 'react';
import styled from 'styled-components';
import Flex from '../../../../Flex';

const StyledCard = styled(Flex)`
  height: 220px;
  min-width: 500px;
  flex-direction: column;
  padding:${(props)=>`${props.theme.gutter.md} ${props.theme.gutter.lg}`};
  margin: ${(props)=>`${props.theme.gutter.xl} ${props.theme.gutter.lg}`};
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  background-color: white;
`
const Title = styled(Flex)`
  height: 22px;
  font-weight: ${(props)=> props.theme.fontWeight.light};
  margin: ${(props)=>`${props.theme.gutter.sm} ${props.theme.gutter.lg}`};
`
const Figure = styled(Flex)`
  height: 35px;
  font-weight: ${(props)=> props.theme.fontWeight.bold};
  font-size: ${(props)=> props.theme.fontSize.xl};
  margin: ${(props)=>`${props.theme.gutter.sm} ${props.theme.gutter.lg}`};
`
const Divider = styled(Flex)`
  margin: ${(props)=>`${props.theme.gutter.sm} ${props.theme.gutter.lg}`};
`

const OtherInfo = styled.div`
  height: 35px;
  margin: ${(props)=>`${props.theme.gutter.sm} ${props.theme.gutter.lg}`};
`

const Card = ({
  title,
  figure,
  otherInfo
}) =>(
  <React.Fragment>
    <StyledCard>
      <Title>{title}</Title>
      <Figure>{figure}</Figure>
      <Divider />
      <OtherInfo>OtherInfo{otherInfo}</OtherInfo>
    </StyledCard>
  </React.Fragment>
)


export default Card;