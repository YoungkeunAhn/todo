import { Box } from "@material-ui/core";
import React, { useState } from "react";
import TodoListBox from "../todo-list/TodoListBox";
import { DEFAULT_TODO_ITEMS, TodoItems } from "../TodoDefaultData";
import BottomAddButton from "./todo-add-dialog/AddDialog";
import TodoItemSearchInput from "./todo-search/TodoItemSearchInput";
import TodoAddBox from "./todo-add-box/TodoAddBox";

function TodoInput() {
    const [items, setItems] = useState<TodoItems[]>(DEFAULT_TODO_ITEMS);
    const [searchText, setSearchText] = useState<string>("");

    //Todo 검색
    const onSearch = (text: string) => {
        setSearchText(text);
    };

    return (
        <Box component="div">
            <TodoItemSearchInput onSearch={onSearch} />
            <TodoAddBox setItems={setItems} />
            <TodoListBox items={items} searchText={searchText} setItems={setItems} />
            <BottomAddButton setItems={setItems} />
        </Box>
    );
}

export default TodoInput;
