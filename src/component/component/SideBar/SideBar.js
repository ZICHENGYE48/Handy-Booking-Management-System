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
                    Orders 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <div>
              <Link to="/create-order">Create order</Link>
            </div>
            <div>
              <Link to="/manage-order">Manage order</Link>
            </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    User management 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div>
                    <Link to="/create-user">Create user</Link>
                </div>
                <div>
                    <Link to="/manage-user">Manage user</Link>
                </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Tradie management
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div>
                    <Link to="/create-tradie">Create tradie</Link>
                </div>
                <div>
                    <Link to="/manage-tradie">Manage tradie</Link>
                </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Transactions management
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div>
                    <Link to="/create-transaction">Create transaction</Link>
                </div>
                <div>
                    <Link to="/manage-transaction">Manage transaction</Link>
                </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </Wrapper>
    )
}

export default SideBar;