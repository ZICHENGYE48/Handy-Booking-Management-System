import React from 'react';
import './Item.css';

const Item = (props) =>{
    return(
    <div className="item">
        <div className="title">
            {props.children}
        </div>
        <button></button>
    </div>
    )
}

export default Item;