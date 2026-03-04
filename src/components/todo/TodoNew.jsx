import { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props;
    // addNewTodo("nguyen")
    const [valueInput, setValueInput] = useState("eric")

    const handleOnChange = (name) => {
        setValueInput(name);

    }
    const hanldeButton = () => {
        // console.log("Check value input: ", valueInput);
        addNewTodo(valueInput);
        setValueInput("");
    }
    return (
        <div className="todo-new">
            <input type="text" onChange={(event) => handleOnChange(event.target.value)} value={valueInput} />
            <button style={{ cursor: "pointer" }} onClick={hanldeButton} >Add</button>
            <div>
                My name is {valueInput}
            </div>
        </div>

    )
}
export default TodoNew;