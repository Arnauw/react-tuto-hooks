import {useState} from "react";

export const AddTodoForm = ({addNewTodo}) => {
    
    const [addTodo, setAddTodo] = useState('');
    
    console.log(addTodo);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTodo(addTodo);
    }

    return (
        <>
            <div>
                <h2 className={"m-5"}>Form</h2>
                <form action="" className={"flex flex-col gap-4"}>

                    <label htmlFor="">Add Todo</label>
                    <input
                        className={"bg-gray-700 border border-gray-500 rounded-md px-3 py-2"}
                        type="text"
                        value={addTodo}
                        onChange={(e) => setAddTodo(e.target.value)}
                    />
                    <input 
                        className={"bg-gray-900 border border-gray-500 rounded-md px-3 py-2"}
                        type="submit"
                        onSubmit={() => handleSubmit}
                    />
                </form>
                
            </div>
        </>
    )
}
