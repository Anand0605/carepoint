import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(props)
  return (
    <div className='p-10 bg-[#1c1c1c] text-white h-screen'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumber changeUser={props.changeUser} data={props.data}/>
      <TaskList changeUser={props.changeUser} data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
