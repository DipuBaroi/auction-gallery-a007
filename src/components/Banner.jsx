import React from 'react';

const Banner = () => {
  return (

    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: "url(https://i.ibb.co.com/zVgcDXB7/Banner-min.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content w-full pl-12 text-neutral-content text-left justify-start items-start">
        <div className="">
          <h1 className="mb-5 text-5xl font-semibold">Bid on Unique Items from <br /> Around the World</h1>
          <p className="mb-5 text-xl">
           Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions
          </p>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-2xl">Explore Auction</button>
        </div>
      </div>
    </div>



  );
};

export default Banner;