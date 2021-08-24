import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function Users() {
    const [users, setUsers] = useState<any>();
    const [error, setError] = useState<Error>();
    const fetchData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setUsers(response.data);
        } catch (e) {
            setError(e);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    console.log(users);
    return (
        <div>
            {users};
            {/* {<ul>
                {users.map((user: any) => (
                    <li key={user.id}>user.username (user.name) </li>
                ))}
            </ul>} */}
        </div>
    );
}

export default Users;
