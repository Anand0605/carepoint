import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-full w-full p-7 bg-[#111] '>
      <Header />
     <CreateTask/>
     <AllTask/>
    </div>
  )
}

export default AdminDashboard
