import {Search} from "./Search.jsx";
import {useEffect, useState} from "react";
import {useUpdateTitle} from "./hooks/useUpdateTitle.jsx";
import {TableUsers} from "./TableUsers.jsx";

const msgDisplay = (msg, color) => {
    return (
        <>
            <p className={`m-5 text-center text-[${color}]`}>
                {msg}
            </p>
        </>
    )
}

export const CustomHooksMyContact = () => {

    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [resultSearch, setResultSearch] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setUsers(json);
                setIsLoading(false);
            })
            .catch(err => console.error(err.message));
    }, []);

    useUpdateTitle(search);
    
    const filterUsers = () => {
        const foundUsers = users.filter((user) => {
            return Object.values(user)
                .join(" ")
                .toLowerCase()
                .includes(search.toLowerCase());
        });
        setResultSearch(foundUsers);
        // users.filter((user) => {
        //     console.log(Object.values(user));
        // })
    }
    
    useEffect(() => {
        if (search !== "") {
            filterUsers();
        } else {
            setResultSearch([]);
        }
    }, [search])

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            {
                isLoading ?
                    msgDisplay("Loading ...", "red") :
                    (
                        <>
                            <Search
                                search={search}
                                searchHandler={handleChange}
                            >
                            </Search>
                            {
                                resultSearch.length === 0 && search !== "" ? 
                                    msgDisplay("No results found", "red") :
                                    search === "" ? 
                                        msgDisplay("Make a new research", "green") :
                                        <TableUsers users={resultSearch}></TableUsers>
                            }
                        </>
                    )
            }

        </>
    )
}
