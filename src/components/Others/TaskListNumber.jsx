// import React from 'react'

// const TaskListNumber = ({data}) => {
//   return (
//     <div className='flex mt-10 justify-between gap-5 screen'>
//         <div className='rounded-xl w-[45%] bg-red-400 py-3 px-9'>
//             <h1 className='text-2xl font-semibold'>{data.taskNumbers.newTask}</h1>
//             <h2 className='text-xl font-medium'>New Task</h2>
//         </div>
//         <div className='rounded-xl w-[45%] bg-blue-400 py-3 px-9'>
//             <h1 className='text-2xl font-semibold'>{data.taskNumbers.newTask}</h1>
//             <h2 className='text-xl font-medium'>New Task</h2>
//         </div>
//         <div className='rounded-xl w-[45%] bg-green-400 py-3 px-9'>
//             <h1 className='text-2xl font-semibold'>{data.taskNumbers.newTask}</h1>
//             <h2 className='text-xl font-medium'>New Task</h2>
//         </div>
//         <div className='rounded-xl w-[45%] bg-yellow-400 py-3 px-9'>
//             <h1 className='text-2xl font-semibold'>{data.taskNumbers.newTask}</h1>
//             <h2 className='text-xl font-medium'>New Task</h2>
//         </div>
      
//     </div>
//   )
// }

// export default TaskListNumber

import React from 'react';

const TaskListNumber = ({ data }) => {
  // Check if data and data.taskNumbers are available
  if (!data || !data.taskNumbers) {
    return <div>Loading...</div>; // Show a loading message or placeholder while data is being fetched
  }

  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='rounded-xl w-[45%] bg-red-400 py-3 px-9'>
        <h1 className='text-2xl font-semibold'>{data.taskNumbers.newTask}</h1>
        <h2 className='text-xl font-medium'>New Task</h2>
      </div>
      <div className='rounded-xl w-[45%] bg-blue-400 py-3 px-9'>
        <h1 className='text-2xl font-semibold'>{data.taskNumbers.completed}</h1>
        <h2 className='text-xl font-medium'>Completed</h2>
      </div>
      <div className='rounded-xl w-[45%] bg-green-400 py-3 px-9'>
        <h1 className='text-2xl font-semibold'>{data.taskNumbers.active}</h1>
        <h2 className='text-xl font-medium'>Active</h2>
      </div>
      <div className='rounded-xl w-[45%] bg-yellow-400 py-3 px-9'>
        <h1 className='text-2xl font-semibold'>{data.taskNumbers.failed}</h1>
        <h2 className='text-xl font-medium'>Failed</h2>
      </div>
    </div>
  );
};

export default TaskListNumber;
