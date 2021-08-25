import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { TodoItems } from "./TodoDefaultData";

function Todos() {
    const [todo, setTodos] = useState<Array<TodoItems>>([]);
    const [error, setError] = useState<Error>();
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/todos");
            setTodos(response.data);
        } catch (e) {
            setError(e);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    console.log(todo);
    return (
        <div style={{ background: "white" }}>
            {
                <ul>
                    {todo.map((todo) => (
                        <li key={todo.timestamp}>{todo.content}</li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default Todos;
