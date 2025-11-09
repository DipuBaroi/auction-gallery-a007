
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Items from './components/Items'
import { CiHeart } from "react-icons/ci";
import NoFavItem from './components/NoFavItem'
import { useState } from 'react'
import MarkedItem from './components/MarkedItem'
import { RxCross2 } from "react-icons/rx";
import Alert from './components/Alert'

function App() {

  const [favourite, setFavourit] = useState([])

  const [amount, setAmount] = useState(0)

  const [alertMessage, setAlertMessage] = useState("")

  const [showAlert, setShowAlert] = useState(false)



  const handleFavourite = (item) => {
    const alreadyMarked = favourite.find((mark) => mark.id === item.id);
    if (alreadyMarked) {
      return;
    }
    else {
      setFavourit([...favourite, item])
      setAmount(amount + item.currentBidPrice)

      setAlertMessage('Item Added To Your Favourite Lists')
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false);
      }, 2000)

     
    }
  }

   

  const handldeRemoveFavourite = (id, CurrentAmount) => {
    const remainingItems = favourite.filter((mark) => mark.id !== id)
    setAmount(amount - CurrentAmount)
    setFavourit(remainingItems)

    setAlertMessage('Item Removed From Favourits!!')
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false);
      }, 3000)
    
  }




  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      

      <main className='p-10 bg-blue-50 space-y-5'>
        <h1 className='text-xl font-semibold'>Active Auction</h1>
        <h3>Discover and bid on extraordinary items</h3>
          {/* Alert */}
          {
        showAlert && (<Alert alertMessage={alertMessage}></Alert>
        )
      }
        <section className='flex gap-5'>

          {/* left container */}
          <div className=' w-3/4 bg-white p-5 rounded-2xl'>


            <div className='grid grid-cols-7 border-1 p-5 rounded-t-2xl  font-bold'>
              <h1 className='col-span-4'>Items</h1>

              <h3>Current Bid</h3>
              <h3>Time Left</h3>
              <h3>Bid Now</h3>

            </div>
            <Items handleFavourite={handleFavourite} favourite={favourite}></Items>
          </div>

    

          {/* Right container */}
          <div className=' w-1/4  bg-white p-5 rounded-2xl'>
         

            <div className='flex justify-center items-center py-3 border-b-2'>
              <CiHeart size={24} />
              <h1 className='text-2xl font-medium  text-blue-500'>Favourits Items</h1>
            </div>
            {
              favourite.length > 0?(
                
              favourite.map((marked) => <MarkedItem key={marked.id} marked={marked} handldeRemoveFavourite={handldeRemoveFavourite}></MarkedItem>


              )
            
              ): (<NoFavItem></NoFavItem>)
            }
            
            
            <div className='flex justify-between py-5  border-t-2'>
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
