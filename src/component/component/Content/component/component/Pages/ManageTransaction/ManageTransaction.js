import React from 'react';
import Description from '../../Description';
import styled from 'styled-components';
import Body from '../../../Body';

const Wrapper = styled.div`
  width: 100%;
`
const ManageTransactions = () =>(
    <Wrapper>
      <Description Title="ManageTransactions" SubText="ManageTransactions subtext"/>
      <Body>
        123
      </Body>
    </Wrapper>
)

export default ManageTransactions ;