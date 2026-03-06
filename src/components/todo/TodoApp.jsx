import { useState } from "react";
import reactLogo from '../../assets/react.svg';
import './todo.css';
import TodoData from "./TodoData";
import TodoNew from "./TodoNew";
const TodoApp = () => {
    const [todoList, setTodoList] = useState([
        // { id: 1, name: "Watching Youtube" },
        // { id: 2, name: "Scrolling Facebook" }
    ])
    const deleteTodo = (id) => {
        setTodoList(todoList.filter(item => item.id !== id))
    }

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

            {todoList.length > 0 ?
                <TodoData
                    todoList={todoList}
                    deleteTodo={deleteTodo}
                />
                :
                <div className="todo-image">
                    <img src={reactLogo} className='logo' />
                </div>
            }


        </div>
    )
}
export default TodoApp;