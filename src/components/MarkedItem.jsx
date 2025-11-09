import React from 'react';
import { RxCross2 } from "react-icons/rx";

const MarkedItem = ({marked, handldeRemoveFavourite}) => {
    return (
        <div className='flex justify-between items-center border-1 rounded-xl p-1 my-3'>
            <div>
                <img className='w-12 h-12 border-1 rounded-xl' src={marked.image} alt="" />
            </div>
            <div>
                <h3>{marked.title}</h3>
                <h3>${marked.currentBidPrice}</h3>
                <h3>Bids: {marked.bidsCount}</h3>
            </div>
            <button onClick={()=>handldeRemoveFavourite(marked.id, marked.currentBidPrice)}><RxCross2 /></button>
            
        </div>
    );
};

export default MarkedItem;