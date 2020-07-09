import React from 'react';
import {
    Route,
  } from "react-router-dom";
import CreateOrder from './component/component/Pages/CreateOrder/CreateOrder';
import ManageOrder from './component/component/Pages/ManageOrder/ManageOrder';
import CreateUser from './component/component/Pages/CreateUser/CreateUser';
import ManageUser from './component/component/Pages/ManageUser/ManageUser';
import CreateTradie from './component/component/Pages/CreateTradie';
import ManageTradie from './component/component/Pages/ManageTradie';
import CreateTransaction from './component/component/Pages/CreateTransaction';
import ManageTransaction from './component/component/Pages/ManageTransaction';
import HomePage from './component/component/Pages/Homepage';
import styled from 'styled-components';
import Flex from '../../Flex'


const Wrapper = styled(Flex)`
  min-height: 700px;
  width: 100%;
`

const Content = () =>{
  return(
  <Wrapper>
        <Route path="/" component={HomePage} exact/> 
        <Route path="/create-order" component={CreateOrder}/> 
        <Route path="/manage-order" component={ManageOrder} />
        <Route path="/create-user" component={CreateUser}/> 
        <Route path="/manage-user" component={ManageUser}/>
        <Route path="/create-tradie" component={CreateTradie}/> 
        <Route path="/manage-tradie" component={ManageTradie}/>
        <Route path="/create-transaction" component={CreateTransaction}/> 
        <Route path="/manage-transaction" component={ManageTransaction}/>
  </Wrapper>
  )
}

export default Content;