import React from 'react';

const FavItem = () => {
    return (
        <div className='border-y-2 p-3 text-center'>
            <h1 className='text-2xl font-medium py-3'>No favorites yet</h1>
            <p className='py-3'>Click the heart icon on any item to add it to your favorites</p>
        </div>
    );
};

export default FavItem;