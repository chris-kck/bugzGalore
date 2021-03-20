import React from 'react'
import logo from "./market.jpg"

function LogIn() {
  return (
    <div>
      <img src={logo} />
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Username
      </label>
      <div class="relative inline-flex">

  <svg class="w-4 h-2 absolute top-0 right-9 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
  
  <select class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-40 bg-white hover:border-gray-400 focus:outline-none appearance-none">
    <option></option>
    <option>Product Owner</option>
  </select>
</div>
</div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"/>
      
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
        Sign In
      </button>
      
      <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>
    </div>
    <div class="py-0 px-10 h-6 grid gid-col-3 grid-flow-col">
    <button class="uppercase px-4 py-2 rounded-full bg-purple-500 text-blue-50 max-w-max shadow-sm hover:shadow-lg">Sign In</button>
    <button class="uppercase px-4 py-2 rounded-full bg-purple-500 text-blue-50 max-w-max shadow-sm hover:shadow-lg">Sign Up</button>
    </div>
</div>
    </div>
  )
}

export default LogIn
