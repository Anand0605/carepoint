import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 bg-blue-400 p-3 h-full w-[250px] rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-2.5 py-1 rounded text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{data.TaskDate}</h4>
      </div>
      <h3 className='mt-3 font-semibold text-xl'>{data.TaskTitle} </h3>
      <p className='text-sm mt-1'>{data.TaskDescription}</p>
      <div className='mt-4'>
        <button className='bg-green-500 py-3 px-4 rounded-xl text-m' > completed</button>
      </div>
    </div>
  )
}

export default CompleteTask
