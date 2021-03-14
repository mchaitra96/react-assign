import React from 'react'

const Tasklist =(props)=>{
    const {tasks,removeTask,editTask,edit,editTaskch,saveTask} = props



    return (<div>
        <h2>Total tasks - {tasks.length}</h2>
        {
            tasks.map((task)=>{
                if(edit===false){
                return(<div>
                    <h3>Title - {task.title}</h3>
                    <p>Details  : {task.body}</p> <button onClick={()=>{editTask(task.title)} } >edit</button> <button onClick={()=>{removeTask(task.title)} } >Remove</button> 
                </div>
                )
                }
                if(edit===true){
                    return(<div>
                        <input value={task.title} label="Title" id="Title" onChange={(e)=>{editTaskch(e,task)}}></input>
                        <input defaultValue={task.body} label="Details" id="Details" onChange={(e)=>{editTaskch(e,task)}}></input> <button onClick={()=>{saveTask(task.title)} } >save</button> <button onClick={()=>{removeTask(task.title)} } >Remove</button> 
                    </div>
                    )
                    }
            })
        } 
    </div>)
}

export default Tasklist


