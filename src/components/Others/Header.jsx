// import React from 'react'

// const Header = ({data}) => {

//   // console.log(data)
//   return (
//     <div className='flex items-end justify-between'>
//       <h1 className='text-xl font-medium text-white'>Hello <br /> <span className='text-2xl font-semibold'>{data.firstName}</span> 👍</h1>
//       <button className='bg-red-600 text-lg font-medium px-3 py-2 rounded'>Log out</button>
//     </div>
//   )
// }

// export default Header

import React from 'react'

const Header = (props) => {
  
  if (!props) {
    return <div>Loading...</div>
  }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // console.log(props.changeUser)
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-xl font-medium text-white'>
        Hello <br /> 
        <span className='text-2xl font-semibold'>{props.firstName || 'User'}</span> 👍
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium px-3 py-2 rounded'>
        Log out
      </button>
    </div>
  )
}

export default Header;

