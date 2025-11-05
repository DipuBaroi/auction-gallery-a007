import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-center items-center py-10'>
            <div className='text-center space-y-5'>
                <h1 className="text-blue-800">Auction<span className='text-yellow-300 text-xl font-bold'>Gallery</span></h1>
                <div className='flex justify-center gap-5'>
                    <p>Bid.</p>
                    <p>Win.</p>
                    <p>Own.</p>
                </div>
                
                <div className='flex gap-5'>
                    <p>Home</p>
                    <p>Auction</p>
                    <p>Categories</p>
                    <p>How to works</p>
                </div>
                <p>© 2025 AuctionHub. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;