import {useEffect, useState} from "react";
import {useUpdateTitle} from "./hooks/useUpdateTitle.jsx";

export const ClickSayHello = () => {

    const [text, setText] = useState("");
    const [isTrue, setIsTrue] = useState(true);
    
    useEffect(() => {
        if (isTrue) {
            setText("Hello Amine!");
        } else {
            setText("Good bye Amine!");
        }
        
    }, [isTrue])
    
    useUpdateTitle(text);

    return (
        <>
            <button
                className={`bg-green-500 px-2 py-2 rounded-md w-fit`}
                onClick={() => setIsTrue(!isTrue)}
            >Click me</button>

            <p className={"m-5"}>Current text: {text}</p>
        </>
    )
}
