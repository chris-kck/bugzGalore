import React from 'react';
import logo from './market.jpg';
import Card from './Card';
import StallCard from './StallCard';
import Footer from './Footer'

function StallView() {
  return (
    <div>
    <img src={logo}/>
    <Card/>
    <StallCard/>
    <button class="bg-gray-500  text-white font-bold py-2 px-4 border border-black-700 rounded">
  Book Stall
</button>
  <Footer/>
    </div>
  )
}

export default StallView
