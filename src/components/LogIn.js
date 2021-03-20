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
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"/>
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
