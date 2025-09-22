import './App.css'
import {Test} from "./components/Test.jsx";
import {Todo} from "./components/Todo.jsx";

function App() {
    return (
        <>
            <h1 className={"text-white text-5xl m-5"}>useState Hooks</h1>
            <Test>Kikoo</Test>
            <Todo></Todo>
            <hr className={"text-white m-5"}/>
        </>
    )
}

export default App
