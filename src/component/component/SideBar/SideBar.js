import React from 'react';
import './SideBar.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import styled from 'styled-components';
import Flex from '../../Flex';

    const Wrapper = styled(Flex)`
      width: 256px;
      align-items: center;
      flex-direction: column;
      color: rgba(0,0,0,.65);
      font-variant: tabular-nums;
      line-height: ${(props)=>props.theme.lineHeight.normal};
      background-color: ${(props)=>props.theme.backgroundColor.primary};
      font-feature-settings: "tnum","tnum";
    `
    const Title = styled.h1`
      color: ${(props)=>props.theme.color.textcolor};
      font-weight: ${(props)=>props.theme.fontWeight.bold};
      font-size: ${(props)=>props.theme.fontSize.lg};
      height: 64px;
      width: 100%;
      text-align: center;
    `
 const SideBar = ()=>{   
    return(
    <Wrapper>
        <Title>Management System</Title>
        <Accordion allowMultipleExpanded="ture" allowZeroExpanded="true">
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    CRUD order
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {/* <p>Create order</p>
                    <p>Read order</p>
                    <p>Update order</p>
                    <p>Delete order</p> */}
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <div>
              <Link to="/create-order">Create order</Link>
            </div>
            <div>
              <Link to="/read-order">read order</Link>
            </div>
            <div>
              <Link to="/update-order">Update order</Link>
            </div>
            <div>
              <Link to="/delete-order">Delete order</Link>
            </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    CRUD user
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>Create user</p>
                    <p>Read user</p>
                    <p>Update user</p>
                    <p>Delete user</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    CRUD tradie
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>Create tradie</p>
                    <p>Read tradie</p>
                    <p>Update tradie</p>
                    <p>Delete tradie</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    CRUD transactions
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>Create transactions</p>
                    <p>Read transactions</p>
                    <p>Update transactions</p>
                    <p>Delete transactions</p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </Wrapper>
    )
}

export default SideBar;