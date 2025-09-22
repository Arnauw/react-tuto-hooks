import {v4 as uuidv4} from 'uuid';
import {useState} from "react";
import {AddTodoForm} from "./AddTodoForm.jsx";

export const Todo = () => {

    const [todos, setTodos] = useState([
        {id: 1, todo: "Buy milk"},
        {id: 2, todo: "Buy bread"},
        {id: 3, todo: "Buy apples"},

    ])

    const addNewTodo = (newTodo) => {
        setTimeout([...todos, {
            id: uuidv4(),
            todo: newTodo,
        }])
    }

    const randuuid = uuidv4();

    console.log(randuuid)

    console.log(todos)

    const todoMap = todos.map((todo, index) => {
        return (<li className={"m-5"} key={index}>Todo {index + 1}: {todo.todo}</li>)
    })

    return (
        <>
            <div className={"m-5"}>
                <h2 className={"text-3xl"}>Todo List</h2>
                <hr className={"my-5"}/>
                <h3>{todos.length ? `You have ${todos.length} things to do:` : null}</h3>
                <ul>{todoMap}</ul>
            </div>
            <hr className={"my-5"}/>
            <AddTodoForm addNewTodo={addNewTodo}></AddTodoForm>
        </>
    )
}
