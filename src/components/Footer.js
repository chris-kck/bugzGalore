import React from 'react'


function Footer() {
  return (
    <div class="py-0 px-10 h-6 grid grid-col-3 grid-flow-col "  style={{
      background: 'gray',
    }}>
      
          <button>
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 100" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  </button>
  <button>
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 100" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
    </button>
    <button>
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 100" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
  </button>

  </div>
  )
}

export default Footer
