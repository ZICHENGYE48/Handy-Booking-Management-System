import React from 'react';
import './Item.css';

const Item = ({
    children
}) =>{
    return(
    <div className="item">
        <div className="title">
            {children}
        </div>
        <button></button>
    </div>
    )
}

export default Item;