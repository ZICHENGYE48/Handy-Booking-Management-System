import React from 'react';
import Control from './component/control';
import styled, { ThemeProvider } from "styled-components"

const CreateOrder = () =>{
    // const Form = styled.div`

    //     color:${(props)=>props.theme.color};
    //     background: ${props.theme.backgroundColor};
    // `
    return(
    <div className="content">
        {/* customer id is xxx
        tradie service id is xxx(dropdown menu) view tradie info
        your address is xxx
        fee is xxx
        estimated service duration
        arrive time
        finish time


        After submit:
        customer id
        tradie service id
        booking status
        your address is xxx
        fee is xxx
        estimated service duration
        arrive time
        finish time

        read order & delete order 删掉 =》manage order



        Create user:

        name
        email 
        address
        phone no.
        password 
        password2

        After submit:

        name
        email 
        address
        phone no.

        create tradie:

        name
        email 
        address
        description
        tradie available time
        company
        phone no.
        password 
        password2

        After submit:

        name
        email 
        address
        phone no.
        description
        company
        tradie available time

        manage transaction */}


        <Control htmlFor='title'>123</Control>
        <Control htmlFor='title'>123</Control>
        <Control htmlFor='title'>123</Control>
        <Control htmlFor='title'>123</Control>
    </div>
    )
}

export default CreateOrder;
;