import React,{useEffect, useState} from 'react'
import AddTask from './AddTask'
import Tasklist from './Taskslist'


const TaskContainer =(props)=>{
    const [tasks,setTasks] = useState([])
   
    const [edit,setEdit] = useState(false)
   
    useEffect(()=>{
        const result = JSON.parse(localStorage.getItem('tasks')) || []
        setTasks(result)
        
    },[])
 
    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(tasks))

    },[tasks])


    const addTask =(task)=>{
        const duplicate = tasks.filter((ele)=>{
            return ele.title === task.title
        })

        if(duplicate.length > 0){
            alert(`Note title should be unique`)
        }else {
            setTasks([...tasks,task])
            localStorage.setItem('tasks',JSON.stringify(tasks))
        }
       
    }

    const editTask = () => {
        setEdit(true)
 
      };
 
      const saveTask = () => {
        setEdit(false)
 
      };
      const editTaskch = (e,task) => {
     
        const result = tasks.map((t) => {
            // alert(e.target.id)
            if (t.id === task.id) {
                if(e.target.id==="Details"){
                    t.body=e.target.value
                }
                if(e.target.id==="Title"){
                    t.title=e.target.value
                }
            return { ...t, ...task };
          } else {
            return { ...t };
          }
        });
      
        setTasks(result);
      };
    const removeTask =(title)=>{
        const result =tasks.filter((task)=>{
            return task.title !== title 
        })
        setTasks(result)
       

    }

   
    

    return (<div className="container">
        <div ><AddTask  addTask={addTask} /></div>
        <div ><Tasklist tasks={tasks}  edit={edit} removeTask={removeTask} saveTask={saveTask} editTask={editTask} editTaskch={editTaskch}/></div>
         
    </div>)
}

export default TaskContainer