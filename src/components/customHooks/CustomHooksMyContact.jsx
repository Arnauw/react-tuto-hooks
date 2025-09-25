import {Search} from "./Search.jsx";
import {useState} from "react";

export const CustomHooksMyContact = () => {

    const [search, setSearch] = useState("");
    
    const handleChange = (e) => {
        
    }

    return (
        <>
            <Search search={search} searchHandler={handleChange}></Search>
        </>
    )
}
