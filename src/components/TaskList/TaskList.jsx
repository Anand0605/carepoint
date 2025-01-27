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
