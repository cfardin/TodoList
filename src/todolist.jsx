import { useState } from "react";


export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");


  const handleInputChange = (event) => {
    // setNewTask(event.target.value);
  };


  const addTask = () => {

  };


  const deleteTask = (index) => {

  };


  const moveTaskUp = (index) => {

  };


  const moveTaskDown = (index) => {

  };


  return (
    <div className="to-do">
        <h1>TodoList</h1>

        <div>
            <input 
                type="text" 
                placeholder="Enter a task" 
                value={newTask} onChange={handleInputChange}/>
        </div>
    </div>
  );
}

