import React from 'react'

function StallCard() {
  return (
    <div>
      <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
  <img class="w-full" src="https://images.unsplash.com/photo-1570169797118-99f5f90c4e25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Book n Sip</div>
    <p class="text-grey-darker text-base">
      From the Tales to the Knowledge
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#books</span>
    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#stories</span>
    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#leisure</span>
  </div>
</div>
    </div>
  )
}

export default StallCard
