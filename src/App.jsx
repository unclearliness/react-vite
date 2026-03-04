import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Watching Youtube" },
    // { id: 2, name: "Scrolling Facebook" }
  ])


  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 10000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }
  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo} />
      <TodoData

        todoList={todoList}


      />
      <div className="todo-image">
        <img src={reactLogo} className='logo' />
      </div>

    </div>
  )
}

export default App
