import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';




const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    });

  
    const data = userData
    console.log(data)

    data.forEach((elem)=>{
      if(assignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask+1
      }
    })
    // localStorage.setItem('employees',JSON.stringify(data))
    setUserData(data)
    console.log(data)

    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form
        onSubmit={(e) => submitHandler(e)}
        className='flex flex-wrap justify-between items-start w-full '
      >
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
              className='text-white text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'
              type='text'
              placeholder='Enter task'
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              className='text-white text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'
              type='date'
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input
              className='text-white text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'
              type='text'
              placeholder='employee name'
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              className='text-white text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'
              type='text'
              placeholder='design, dev, etc'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
            className='text-white w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]'
            placeholder='Enter task description'
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
          <button
            className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
