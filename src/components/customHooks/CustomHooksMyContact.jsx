import {Search} from "./Search.jsx";
import {useState} from "react";
import {useUpdateTitle} from "./hooks/useUpdateTitle.jsx";

export const CustomHooksMyContact = () => {

    const [search, setSearch] = useState("");

    console.log(search)

    useUpdateTitle(search);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <Search search={search} searchHandler={handleChange}></Search>
        </>
    )
}
