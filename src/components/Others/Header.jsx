import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-xl font-medium'>Hello <br /> <span className='text-2xl font-semibold'>Anand</span> 👍</h1>
      <button className='bg-red-600 text-lg font-medium px-3 py-2 rounded'>Log out</button>
    </div>
  )
}

export default Header
