
import './App.css';
import TodoList from './todoList';
import {useState, useEffect} from 'react'
function App() {
  const [todoList, setTodoList] = useState(() => {
    if(localStorage.getItem("todo") === null) {
      return []
    }else{
      return JSON.parse(localStorage.getItem("todo"))
    }
  })
  const [task, setTask] = useState("")

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList))
  },[todoList])

  const addTask = () => {
    if(task.length !== 0) {
    setTodoList([...todoList, {name: task, completed: false, id : todoList.length}])
    }
  }
  const deleteTask = (id) => {
    const array = todoList.filter(arr => arr.id === id ? false : true)
    setTodoList(array)
  }

  const completeTask = (id) => {
    const array = todoList.slice()
    for(let i = 0; i < array.length; i++) {
      if(array[i].id === id) {
        array[i].completed = !array[i].completed
      }
    }
    setTodoList(array)
  }
  return (
    <div className="App">
      <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="New Task" />
      <button onClick={addTask}>Add Task</button>
      </div>
     <TodoList todoList={todoList} deleteTask={deleteTask} completeTask={completeTask}/>
    </div>
  );
}

export default App;
