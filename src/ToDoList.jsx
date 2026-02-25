import {useState} from 'react'
export default function ToDoList() {
    
    let [todos, settodos] = useState(["Sample Task"])
    let [newTodo, setnewtodo] = useState("");

    let addNewTask=()=>{
        settodos([...todos, newTodo]);
        setnewtodo("");
    };

    let updateTodoValue=(event)=>{
        setnewtodo(event.target.value);
    }

return(
    <div>
        <input placeholder="add a task" value ={newTodo} onChange={updateTodoValue}  ></input>
        <br></br>
        <button onClick ={addNewTask}>Add Task</button>
        <br></br>
        <br></br>
        <br></br>

           <hr></hr>
        <h3>Tasks Todo</h3>
        <ul>
            {todos.map((todo) => {
                return <li>{todo}</li>
            })}
        </ul>
    </div>
)
    
}