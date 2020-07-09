import React from 'react';
import styled from 'styled-components';

const ContentTitle = styled.div`
  font-weight: ${(props)=> props.theme.fontWeight.bold};
  font-size: ${(props)=> props.theme.fontSize.lg};
  text-align: left;
  padding:${(props)=>`${props.theme.gutter.md} ${props.theme.gutter.lg}`};
`;

const ContentSubText = styled.div`
  font-weight: ${(props)=> props.theme.fontWeight.normal};
  font-size: ${(props)=> props.theme.fontSize.md};
  padding:${(props)=>`${props.theme.gutter.md} ${props.theme.gutter.lg}`};
`;

const Wrapper = styled.div`
  padding:${(props)=> props.theme.gutter.lg};
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
`
const Description = ({
  Title,
  SubText
}) =>{
  return(
  <Wrapper>
  <ContentTitle>{Title}</ContentTitle>
  <ContentSubText>{SubText}</ContentSubText>
  </Wrapper>
  )
};

export default Description;


