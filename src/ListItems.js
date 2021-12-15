import React from 'react';
import './ListItems.css';
function ListIitems(props) {
    
    const items = props.lists;
    const listitems =  items.map(item => 
        {
         return <div className="listStyle" key={item.key}>
            <p className="items">
                {item.text}
            </p>
        </div>
    });
    return (
        <div>
            {listitems}
            
        </div>
    )
}
export default ListIitems;