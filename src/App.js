import React from 'react'
import { useState } from 'react'
import './App.css';

const App = () => {

  const [todoList,settodoList] = useState([]);
  const [newTask,setnewTask] = useState("");

  
  const handleChange = (event) =>{
      setnewTask(event.target.value);
  }
const addTasks = () =>{
  const task ={
    id: todoList.length===0 ?1:todoList[todoList.length-1].id+1,
    taskName:newTask,
  };
  settodoList([...todoList,task]);
}
  
const deleteTask = (id) =>{
  settodoList(todoList.filter((task) => task.id!==id));
}
  return (
    <div className='App'>
    <div className='heading'><h1>To-do List</h1></div>
      <div className='addTask'>
      <input onChange={handleChange}/>
      <button onClick={addTasks}>Add Task</button>
      </div>
      <div className='list'>
      {todoList.map((task) => {
        return(
          <div>
          <h1>{task.taskName}</h1>  
          <button onClick={()=>deleteTask(task.id)}>X</button>
          </div>
        );
      })}
      
      </div>
    </div>
  )
}

export default App
