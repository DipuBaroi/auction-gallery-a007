import React from 'react';
import { RxCross2 } from "react-icons/rx";

const MarkedItem = ({marked}) => {
    return (
        <div className='flex justify-between items-center border-1 rounded-xl p-1 mt-3'>
            <div>
                <img className='w-12 h-12' src={marked.image} alt="" />
            </div>
            <div>
                <h3>{marked.title}</h3>
                <h3>{marked.currentBidPrice}</h3>
                <h3></h3>
            </div>
            <button><RxCross2 /></button>
            
        </div>
    );
};

export default MarkedItem;