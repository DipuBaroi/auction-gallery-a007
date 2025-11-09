import React from 'react';
import { CiHeart } from "react-icons/ci";

const Item = ({ item, handleFavourite}) => {
    // console.log(item)
    return (
        <div>

            {/* <div className="overflow-x-auto border-1">
                <table className="table">
                    
                    
                    <tbody>
                        
                        <tr>
                            
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className=" h-12 w-12">
                                            <img
                                                src={item.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.title}</div>
                                       
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.currentBidPrice}
                            </td>
                            <td>{item.timeLeft}</td>
                            <th>
                                <button><CiHeart size={24} /></button>
                            </th>
                        </tr>
                        
                       
                       
                    </tbody>
                    
                </table>
            </div> */}
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
                <button onClick={()=>handleFavourite(item)}><CiHeart size={24} /></button>


            </div>


        </div>
    );
};

export default Item;