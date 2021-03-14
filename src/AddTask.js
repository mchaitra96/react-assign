import React,{useState} from 'react'

const AddTask =(props)=>{
    const {addTask} = props
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [error,setError] = useState(false)

    const handleTitle =(e)=> setTitle(e.target.value)
    const handleBody =(e)=> setBody(e.target.value)

    const runValidations =()=>{
        if(title.trim().length === 0){
            alert("Title cannot be empty")
            setError(true)
        }else if (body.trim().length === 0){
            alert("body cannot be empty")
            setError(true)
        }
    }

    const handlereset =()=>{
        setTitle("")
        setBody("")
        setError(false)

    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        runValidations()
        var min = 1;
        var max = 100;
        var rand =  min + (Math.random() * (max-min));
        var id= rand
        if(!error){
            const data ={
                id,
                title,
                body
            }
            addTask(data)
            handlereset()
        }
    }

    return (<div>
    <div >
    <h2>Add Task</h2>
          <form>
              <label>Task Title : </label><br/>
              <input type="text" placeholder="Enter the title for task" value={title} onChange={handleTitle}/><br/><br/>
              <label>Details about task : </label><br/><textarea value={body} onChange={handleBody} placeholder="enter details"></textarea> <br/><br/>
              <button onClick={handleSubmit} >Add Task</button> <button onClick={handlereset} >Reset</button>
          </form>
    </div>
  </div>)
}

export default AddTask

