import React from 'react';
import {
    Route,
  } from "react-router-dom";
import CreateOrder from './component/component/Pages/CreateOrder/CreateOrder';
import CreateOrderResult from './component/component/Pages/CreateOrder/CreateOrderResult';
import ManageOrder from './component/component/Pages/ManageOrder/ManageOrder';
import CreateUser from './component/component/Pages/CreateUser/CreateUser';
import CreateUserResult from './component/component/Pages/CreateUser/CreateUserResult';
import ManageUser from './component/component/Pages/ManageUser/ManageUser';
import CreateTradie from './component/component/Pages/CreateTradie';
import CreateTradieResult from './component/component/Pages/CreateTradie/CreateTradieResult';
import ManageTradie from './component/component/Pages/ManageTradie';
import CreateTransaction from './component/component/Pages/CreateTransaction';
import CreateTransactionResult from './component/component/Pages/CreateTransaction/CreateTransactionResult';
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
        <Route path="/create-order" component={CreateOrder} exact/> 
        <Route path="/create-order/result" component={CreateOrderResult} exact/> 
        <Route path="/manage-order" component={ManageOrder} />
        <Route path="/create-user" component={CreateUser} exact/> 
        <Route path="/create-user/result" component={CreateUserResult} exact/> 
        <Route path="/manage-user" component={ManageUser}/>
        <Route path="/create-tradie" component={CreateTradie} exact/> 
        <Route path="/create-tradie/result" component={CreateTradieResult} exact/>
        <Route path="/manage-tradie" component={ManageTradie}/>
        <Route path="/create-transaction" component={CreateTransaction} exact/> 
        <Route path="/create-transaction/result" component={CreateTransactionResult} exact/>
        <Route path="/manage-transaction" component={ManageTransaction}/>
  </Wrapper>
  )
}

export default Content;