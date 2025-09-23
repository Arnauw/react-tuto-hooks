import './App.css'
import {Test} from "./components/Test.jsx";
import {Todo} from "./components/Todo.jsx";
import {ClassCount} from "./components/ClassCount.jsx";
import {FunctionCount} from "./components/FunctionCount.jsx";
import {Profile} from "./components/Profile.jsx";
import {ProfileData} from "./components/ProfileData.jsx";
import {useState} from "react";
import {UserContext, ColorContext} from "./components/MyContext.jsx";

function App() {

    // const [name, setName] = useState("Lisa");
    // const [age, setAge] = useState(8);

    const [user, setUser] = useState({
        name: "Lisa",
        age: 8,
    })

    return (
        <>
            {/*<h1 className={"text-white text-5xl m-5"}>useState Hook</h1>*/}
            {/*<Test>Kikoo</Test>*/}
            {/*<Todo></Todo>*/}
            {/*<hr className={"text-white m-5"}/>*/}
            {/*<ClassCount></ClassCount>*/}
            {/*<hr className={"text-white m-5"}/>*/}
            {/*<FunctionCount></FunctionCount>*/}

            <h1 className={"text-white text-5xl m-5"}>useContext Hook</h1>
            <Test>Kikoo</Test>
            <hr className={"text-white m-5"}/>
            <UserContext.Provider value={user}>
                <ColorContext.Provider value={"yellow"}>
                    <Profile></Profile>
                </ColorContext.Provider>
            </UserContext.Provider>

        </>
    )
}

export default App
