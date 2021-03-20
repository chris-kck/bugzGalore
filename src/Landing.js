import React from 'react'
import logo from "./market.jpg"
import Card from "./Card"

function Landing() {
  return (
    <div>
      <img src={logo} />
      <div class="grid gap-2">

      <button class="uppercase px-2 py-2 rounded-full bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">CPT</button>
      <button class="uppercase px-2 py-2 rounded-full bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">JHB</button>
      <button class="uppercase px-2 py-2 rounded-full bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">KZN</button>
      <button class="uppercase px-2 py-2 rounded-full bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">DUR</button>
      <button class="uppercase px-2 py-2 rounded-full bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">MYLOCATION<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="32" height="32" viewBox="0 0 32 32" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      </button>
			
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  )
}

export default Landing
