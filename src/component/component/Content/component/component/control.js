import React from 'react';

const Control = ({
    children,
    htmlFor
})=> {

    return(
    <div className= 'control'>
    <label htmlFor={htmlFor}>{children}</label>
    <input></input>
    </div>
    )
};

export default Control;