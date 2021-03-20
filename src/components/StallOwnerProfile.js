import React from 'react'

function StallOwnerProfile() {
  return (
    <div>
      <div>
      <img src={logo} />
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Market Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Market Name"/>
    </div>

    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        image
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="upload"/>
    </div>

    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Location
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Location"/>
    </div>

    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Stalls
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Stalls"/>
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Yokoaccount
      </label>
      <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="00000000000"/>
      
    </div>
    <Link to="/booking">
    <div class="flex items-center justify-between">
      <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
        Book
      </button>
      
    </div>
   </Link>
    <div class="py-0 px-10 h-6 grid gid-col-3 grid-flow-col">
    <button class="uppercase px-4 py-2 rounded-full bg-purple-500 text-blue-50 max-w-max shadow-sm hover:shadow-lg">Sign In</button>
    <button class="uppercase px-4 py-2 rounded-full bg-purple-500 text-blue-50 max-w-max shadow-sm hover:shadow-lg">Sign Up</button>
    </div>
</div>
    </div>
    </div>
  )
}

export default StallOwnerProfile
