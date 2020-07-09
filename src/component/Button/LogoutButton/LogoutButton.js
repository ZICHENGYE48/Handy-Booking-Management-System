import styled from 'styled-components';

export default styled.button`
  background-color: ${(props)=> props.theme.color.buttoncolor2};
  color: ${(props)=> props.theme.color.textcolor};
  padding:${(props)=>`${props.theme.gutter.xs} ${props.theme.gutter.md}`};
  cursor: pointer;
  border-radius: ${(props)=> props.theme.borderRadius.lg};
  outline: none;

  &:hover{
    background-color: ${(props)=> props.theme.color.buttoncolorhover2};
  };
`