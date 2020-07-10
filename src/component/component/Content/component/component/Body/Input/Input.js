import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`
const Input = styled.input`
  border: 1px solid #d9d9d9;
  min-width: 200px;
  margin: 0;
  margin-bottom: ${(props)=> props.theme.gutter.xl};
  border-radius: ${(props)=> props.theme.borderRadius.sm};
  line-height: ${(props)=> props.theme.lineHeight.lg};

  &:hover{
    border: 1px solid ${(props)=> props.theme.color.primary};
  }
`
const Label = styled.label`
  line-height: ${(props)=> props.theme.lineHeight.lg};
`
const Small = styled.small`
  /* border: 1px solid red; */
  font-size: 14px;
  position: absolute;
  color: red;
  left: 100px;
  right:0;
  bottom: 11px;
` 

const InputContainer = ({
  id,
  children,
  type,
  placeholder,
  errorMsg,
  onChange,
}) =>(
  <Wrapper>
    <Label htmlFor={id}>{children}</Label>
    <Input type={type} id={id} placeholder={placeholder} onChange={(e)=> onChange(e.target.value, id)} />
    <Small>{errorMsg}</Small>
  </Wrapper>
);

export default InputContainer;