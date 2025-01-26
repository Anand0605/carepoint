import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-full w-full p-7 bg-[#111] '>
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
