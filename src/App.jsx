import './App.css'
import {Test} from "./components/Test.jsx";
import {Todo} from "./components/useState/Todo.jsx";
import {ClassCount} from "./components/useEffect/ClassCount.jsx";
import {FunctionCount} from "./components/useEffect/FunctionCount.jsx";
import {Profile} from "./components/useContext/Profile.jsx";
import {ProfileData} from "./components/useContext/ProfileData.jsx";
import {useCallback, useState} from "react";
import {UserContext, ColorContext} from "./components/useContext/MyContext.jsx";
import {Count} from "./components/useReducer/Count.jsx";
import {ProgressBar} from "./components/useCallback/ProgressBar.jsx";
import {IncrementButtonProgressBar} from "./components/useCallback/IncrementButtonProgressBar.jsx";
import {DecrementButtonProgressBar} from "./components/useCallback/DecrementButtonProgressBar.jsx";
import {ClearButtonProgressBar} from "./components/useCallback/ClearButtonProgressBar.jsx";

function App() {

    const [user, setUser] = useState({
        name: "Lisa",
        age: 8,
    })

    const [progressBarState, setProgressBarState] = useState({
        value: 0,
        btnColor: 'green',
        increment: 10,
        decrement: 10,
    });

    const incrementProgressBar = useCallback((increment) => {
        setProgressBarState((prev) => {
            if (prev.value < 100) {
                return {
                    ...prev,
                    value: prev.value + increment,
                }
            }
            return prev;
        });
    }, []);

    const decrementProgressBar = useCallback((decrement) => {
        setProgressBarState((prev) => {
            if (prev.value > 0) {
                return {
                    ...prev,
                    value: prev.value - decrement,
                }
            }
            return prev;
        });
    }, []);

    const clearProgressBar = useCallback(() => {
        setProgressBarState((prev) => {
            return {
                ...prev,
                value: 0,
            };
        });
    }, []);


    return (
        <>
            {/*<h1 className={"text-white text-5xl m-5"}>useState Hook</h1>*/}
            {/*<Test>Kikoo</Test>*/}
            {/*<Todo></Todo>*/}
            {/*<hr className={"text-white m-5"}/>*/}
            {/*<ClassCount></ClassCount>*/}
            {/*<hr className={"text-white m-5"}/>*/}
            {/*<FunctionCount></FunctionCount>*/}

            {/*<h1 className={"text-white text-5xl m-5"}>useReducer Hook</h1>*/}
            {/*<Test>Kikoo</Test>*/}
            {/*<Count></Count>*/}


            {/*<h1 className={"text-white text-5xl m-5"}>useContext Hook</h1>*/}
            {/*<Test>Kikoo</Test>*/}
            {/*<hr className={"text-white m-5"}/>*/}
            {/*<UserContext.Provider value={user}>*/}
            {/*    <ColorContext.Provider value={"blue"}>*/}
            {/*        <Profile></Profile>*/}
            {/*    </ColorContext.Provider>*/}
            {/*</UserContext.Provider>*/}

            <h1 className={"text-white text-5xl m-5"}>useCallback Hook</h1>

            <ProgressBar progressBarState={progressBarState}></ProgressBar>
            <div className={"flex justify-center items-center gap-5"}>
                <IncrementButtonProgressBar
                    progressBarState={progressBarState}
                    incrementProgressBar={incrementProgressBar}
                >+ %</IncrementButtonProgressBar>
                <DecrementButtonProgressBar
                    progressBarState={progressBarState}
                    decrementProgressBar={decrementProgressBar}
                >- %</DecrementButtonProgressBar>
                <ClearButtonProgressBar
                    clearProgressBar={clearProgressBar}
                >Clear</ClearButtonProgressBar>
            </div>
        </>
    )
}

export default App
