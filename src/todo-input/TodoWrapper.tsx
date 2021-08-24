import { Box } from "@material-ui/core";
import React, { useState } from "react";
import TodoListBox from "../todo-list/TodoListBox";
import { DEFAULT_TODO_ITEMS, TodoItems } from "../TodoDefaultData";
import TodoDialogBox from "./todo-dialog/TodoDialogBox";
import TodoSearchBox from "./todo-search/TodoSearchBox";
import TodoAddBox from "./todo-add/TodoAddBox";

function TodoWrapper() {
    const [items, setItems] = useState<TodoItems[]>(DEFAULT_TODO_ITEMS);
    const [searchText, setSearchText] = useState<string>("");
    const [inputs, setInputs] = useState({
        searchInput: "",
        addInput: "",
        dialogAddInput: "",
    });
    const { searchInput, addInput, dialogAddInput } = inputs;
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };

    //Todo 검색
    const onSearch = (text: string) => {
        setSearchText(text);
    };

    //inputs reset
    const onReset = () => {
        setInputs({ ...inputs, searchInput: "", addInput: "", dialogAddInput: "" });
    };

    return (
        <Box>
            <TodoSearchBox onSearch={onSearch} onChange={onChange} text={searchInput} onReset={onReset} />
            <TodoAddBox setItems={setItems} onChange={onChange} onReset={onReset} text={addInput} />
            <TodoListBox items={items} searchText={searchText} setItems={setItems} />
            <TodoDialogBox setItems={setItems} onChange={onChange} onReset={onReset} text={dialogAddInput} />
        </Box>
    );
}

export default TodoWrapper;
