import logo from "./market.jpg"
import React from 'react'
import Card from "./Card"
import Stall from './Stall'

function MarketView() {
  return (
    <div>
       <img src={logo} />
       <Card/>
       <div class="grid grid-cols-2 gap-4">

       <div><Stall/></div>
       <div><Stall/></div>
       <div><Stall/></div>
       <div><Stall/></div>
       <div><Stall/></div>
       <div><Stall/></div>
      </div>
        
    </div>
  )
}
export default MarketView