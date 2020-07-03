import React from 'react';
import styled from 'styled-components';

const ContentTitle = styled.div`
  font-weight: ${(props)=> props.theme.fontSize.lg};
  color: ${(props)=> props.theme.color.primary};
  text-align: left;
  padding:${(props)=>`${props.theme.gutter.md} ${props.theme.gutter.lg}`};
`;

const ContentSubText = styled.div`
  font-weight: ${(props)=> props.theme.fontSize.md};
  padding:${(props)=>`${props.theme.gutter.md} ${props.theme.gutter.lg}`};
`;

const Wrapper = styled.div`
  padding:${(props)=> props.theme.gutter.lg};
`
const Description = ({
  Title,
  SubText
}) =>{
  return(
  <Wrapper>
  <ContentTitle>{Title}</ContentTitle>
  <ContentSubText>This is a {SubText}</ContentSubText>
  </Wrapper>
  )
};

export default Description;