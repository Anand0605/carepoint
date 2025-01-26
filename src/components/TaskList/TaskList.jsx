import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    // console.log(data)
    return (
        <>

            <div id='tasklist' className='h-[55%] w-full overflow-x-auto  mt-6 py-3 flex justify-start items-center flex-nowrap gap-5'>


                {/* <div className=' flex-shrink-0 bg-green-400 h-full p-3 w-[250px] rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-2.5 py-1 rounded text-sm'>High</h3>
                    <h4 className='text-sm'>20 fab 2020</h4>
                </div>
                <h3 className='mt-3 font-semibold text-xl'>make youtube for fun </h3>
                <p className='text-sm mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste, iusto eaque totam sint inventore cupiditate unde quisquam tempora pariatur.</p>
                
            </div> */}
                {/* <AcceptTask/>
            <NewTask/>
            <CompleteTask/>
            <FailedTask/> */}
                {data?.tasks?.map((elem, index) => {
                    if(elem.active){
                        return <AcceptTask key={index} data={elem}/>
                    }
                    if(elem.newTask){
                        return <NewTask key={index} data={elem}/>
                    }
                    if(elem.completed){
                        return <CompleteTask key={index} data={elem}/>
                    }
                    if(elem.failed){
                        return <FailedTask key={index} data={elem}/>
                    }
                })}

            </div>
        </>
    )
}

export default TaskList
