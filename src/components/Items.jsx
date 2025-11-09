import React, { useEffect, useState } from 'react';
import Item from './Item';

const Items = ({handleFavourite, favourite}) => {
    

    const [items, setItems] =useState([])

    useEffect(()=>{
        fetch("items.json")
        .then(res=> res.json())
        .then(data=>setItems(data))
    },[])

    // console.log(items)

    return (
        <div>
            <div className="all-items">
                
                {
                    items.map((item)=><Item key={item.id} item={item} handleFavourite={handleFavourite} favourite={favourite}></Item>)
                }
            </div>
        </div>
    );
};

export default Items;