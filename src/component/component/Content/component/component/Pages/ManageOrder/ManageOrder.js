import React from 'react';
import Description from '../../Description';
import styled from 'styled-components';
import Body from '../../../Body';

const Wrapper = styled.div`
  width: 100%;
`
const ManageOrder = () =>(
    <Wrapper>
      <Description Title="ManageOrder" SubText="ManageOrder subtext"/>
      <Body>
        123
      </Body>
    </Wrapper>
)

export default ManageOrder ;