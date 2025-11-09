
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Items from './components/Items'
import { CiHeart } from "react-icons/ci";
import FavItem from './components/FavItem'
import { useState } from 'react'
import MarkedItem from './components/MarkedItem'
import { RxCross2 } from "react-icons/rx";

function App() {

const [favourite, setFavourit] = useState([])

const [amount, setAmount] = useState(0)



  const handleFavourite = (item) =>{
    const alreadyMarked = favourite.find((mark)=> mark.id===item.id);
    if(alreadyMarked){
      return;
    }
    else{
    setFavourit([...favourite, item])
    setAmount(amount + item.currentBidPrice)
    alert('Item Added To Your Favourite List')
    }
  }

  const handldeRemoveFavourite = (id, CurrentAmount) =>{
    const remainingItems = favourite.filter((mark)=>mark.id!==id)
    setAmount(amount-CurrentAmount)
    setFavourit(remainingItems)
  }

  


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <main className='p-10 bg-blue-50 space-y-5'>
        <h1 className='text-xl font-semibold'>Active Auction</h1>
        <h3>Discover and bid on extraordinary items</h3>
        <section className='flex gap-5'>

          {/* left container */}
          <div className='border-2 border-blue-500 w-3/4 bg-white p-5 rounded-2xl'>
          

              <div className='grid grid-cols-7 border-1 p-5 rounded-t-2xl  font-bold'>
                <h1 className='col-span-4'>Items</h1>
                
                  <h3>Current Bid</h3>
                  <h3>Time Left</h3>
                  <h3>Bid Now</h3>
               
              </div>
            <Items handleFavourite={handleFavourite} favourite={favourite}></Items>
          </div>

          {/* Right container */}
          <div className='border-2 border-amber-800 w-1/4  bg-white p-5 rounded-2xl'>

            <div className='flex justify-center items-center py-3'>
              <CiHeart size={24} />
              <h1 className='text-2xl font-medium  text-blue-500'>Favourits Items</h1>
              </div>
              <FavItem></FavItem>
              {
                favourite.map((marked)=> <MarkedItem key={marked.id} marked={marked} handldeRemoveFavourite={handldeRemoveFavourite}></MarkedItem> 
            
            
         )
              }  
            <div className='flex justify-between py-2 mt-5'>
              <h3 className='text-xl'>Total bids Amount</h3>
              <h3 className='font-semibold text-xl'>${amount}</h3>
            </div>

          </div>
        </section>
       
      </main>
      <Footer></Footer>

    </>
  )
}

export default App
