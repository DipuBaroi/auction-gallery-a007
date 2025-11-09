import React from 'react';
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";

const Item = ({ item, handleFavourite, favourite }) => {
    
    const isMarked = favourite.find((mark)=>mark.id === item.id)
    return (
        <div>

            <div className='grid grid-cols-7 gap-5 border-1  p-5 items-center'>
                <div className='flex gap-5 col-span-4'>
                    <div >
                        <img className=" h-12 w-12"
                            src={item.image}
                        />
                    </div>
                    <div className="font-bold">{item.title}</div>
                </div>

                <div>{item.currentBidPrice}</div>
                <div>{item.timeLeft}</div>
                <button className={isMarked? "cursor-not-allowed" : "cursor-pointer"} onClick={() => handleFavourite(item)} disabled={isMarked}>

                    {/* <CiHeart/> */}

                    {
                        isMarked?(<AiFillHeart size={24} color='red'/>
                            
                        ): (<CiHeart size={24}/>)
                    }
                    
                    </button>


            </div>


        </div>
    );
};

export default Item;