import {useEffect} from "react";

export const useUpdateTitle = (titleText) => {
    
    useEffect(() => {
        // console.dir(document);
        // document.title = titleText;
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => console.log(json))
    }, 
        // [titleText]
    )

    return (
        <>

        </>
    )
}
