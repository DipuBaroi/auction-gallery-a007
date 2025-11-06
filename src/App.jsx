import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <main className='p-10 bg-blue-50 space-y-5'>
        <h1 className='text-xl font-semibold'>Active Auction</h1>
        <h3>Discover and bid on extraordinary items</h3>
        <section className='flex gap-5'>
          <div className='border-2 border-blue-500 w-3/4'></div>
          <div className='border-2 border-amber-800 w-1/4'></div>
        </section>
      </main>
      <Footer></Footer>
      
    </>
  )
}

export default App
