import React from 'react'

const AcceptTask = ({data}) => {
  // console.log(data)
  return (
    <>
   
   <div className=' flex-shrink-0 bg-green-400 h-full p-3 w-[250px] rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-2.5 py-1 rounded text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{data.TaskDate}</h4>
      </div>
      <h3 className='mt-3 font-semibold text-xl'>{data.TaskTitle} </h3>
      <p className='text-sm mt-1'>{data.TaskDescription}</p>
      <div className='flex justify-between mt-4 p-1 gap-1'>
      <button className='bg-green-500 py-1 px-2 text-sm rounded-xl'>mark as completed</button>
      <button className='bg-red-500 py-1 px-2 text-sm rounded-xl'>mark as failed</button>
    </div>
    </div>
    
   
    </>
  )
}

export default AcceptTask
