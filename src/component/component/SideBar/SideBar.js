import React from 'react';
import './SideBar.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import Flex from '../../Flex';

    const Wrapper = styled(Flex)`
      align-items: center;
      flex-direction: column;
      color: rgba(0,0,0,.65);
      font-variant: tabular-nums;
      line-height: ${(props)=>props.theme.lineHeight.normal};
      background-color: ${(props)=>props.theme.backgroundColor.primary};
      font-feature-settings: "tnum","tnum";
      min-height: 100%;
    `

    const Title = styled.h1`
      color: ${(props)=>props.theme.color.textcolor};
      font-weight: ${(props)=>props.theme.fontWeight.bold};
      font-size: ${(props)=>props.theme.fontSize.lg};
      height: 64px;
      width: 100%;
      text-align: center;
    `

    const SideLink = styled(Link)`
      text-decoration: none;
      display: block;
      color: ${(props)=>props.theme.color.textcolor2};

      &:hover{
        color: ${(props)=>props.theme.color.textcolor};
      }
    `
 const SideBar = ({className})=>{   
    return(
    <Wrapper className={className}>
        <Title>
            <SideLink to="/">Management System</SideLink>
        </Title>
        <Accordion allowMultipleExpanded="ture" allowZeroExpanded="true">
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Orders 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

              <SideLink to="/create-order">Create order</SideLink>
              <SideLink to="/manage-order">Manage order</SideLink>

                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Users 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <SideLink to="/create-user">Create user</SideLink>
                    <SideLink to="/manage-user">Manage user</SideLink>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Tradies
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <SideLink to="/create-tradie">Create tradie</SideLink>
                    <SideLink to="/manage-tradie">Manage tradie</SideLink>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Transactions
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <SideLink to="/create-transaction">Create transaction</SideLink>
                    <SideLink to="/manage-transaction">Manage transaction</SideLink>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </Wrapper>
    )
}

export default SideBar;