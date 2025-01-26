import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)
    // console.log(authData.employees)

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded  '>
             <div className='bg-red-500 py-2 px-4 mb-2 rounded flex justify-between'>
                <h2 className='w-1/5 text-lg font-medium '>Employees Name</h2>
                <h3 className='w-1/5 text-lg font-medium'>New Task </h3>
                <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
                <h5 className='w-1/5 text-lg font-medium '>Completed</h5>
                <h5 className='w-1/5 text-lg font-medium'>failed</h5>
            </div>
           <div className=' '>
           {userData.employees.map((elem ,index)=>{
                return  <div key={index} className=' border-emerald-500 border-2 py-2 px-4 mb-2 rounded flex justify-between'>
                <h2 className='text-lg font-medium w-1/5 text-white'>{elem.firstName}</h2>
                <h3 className='text-lg font-medium w-1/5 text-blue-800'>{elem.taskNumbers.newTask}</h3>
                <h5 className=' text-lg font-medium w-1/5 text-yellow-700'>{elem.taskNumbers.active}</h5>
                <h5 className=' text-lg font-medium w-1/5 text-white'>{elem.taskNumbers.completed}</h5>
                <h5 className=' text-lg font-medium w-1/5 text-red-700'>{elem.taskNumbers.failed}</h5>
            </div>
            })}
           </div>
        </div>
    )
}

export default AllTask
