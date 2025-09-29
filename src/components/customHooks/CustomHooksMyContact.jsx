import {Search} from "./Search.jsx";
import {useEffect, useState} from "react";
import {useUpdateTitle} from "./hooks/useUpdateTitle.jsx";
import {TableUsers} from "./TableUsers.jsx";

const msgDisplay = (msg, color) => {
    return (
        <>
            <p className={`text-center text-[${color}]`}>
                {msg}
            </p>
        </>
    )
}

export const CustomHooksMyContact = () => {

    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setUsers(json);
                setIsLoading(false);
            })
            .catch(err => console.error(err.message));
    }, [isLoading, users]);

    useUpdateTitle(search);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            {
                isLoading ?
                    msgDisplay("Loading ...", "red") :
                    (<Search
                        search={search}
                        searchHandler={handleChange}
                        // users={users}
                    >
                    </Search>)
            }
            <TableUsers users={users}></TableUsers>
        </>
    )
}
