import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { TodoItems } from "../../TodoDefaultData";
import { useStyles } from "./style";

type Props = {
    setItems: React.Dispatch<React.SetStateAction<TodoItems[]>>;
};

function TodoAddBox(props: Props) {
    const setItems = props.setItems;
    const classes = useStyles();
    const [todoAddText, setTodoAddText] = useState("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoAddText(event.target.value);
    };

    const onClickAdd = () => {
        createTodoItem2();
    };
    const createTodoItem2 = () => {
        const newItem = {
            id: `${Date.now()}`,
            text: todoAddText,
            deleted: false,
            madeDate: `${new Date().toLocaleDateString("ko-kr", { year: "numeric", month: "numeric", day: "2-digit" })}`,
        };

        setItems((prev) => prev.concat([newItem]));
        setTodoAddText("");
    };

    return (
        <div className={classes.root}>
            <TextField
                value={todoAddText}
                onChange={onChange}
                fullWidth
                label="Add Todo"
                variant="outlined"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onClickAdd();
                    }
                }}
            />
            <Button onClick={onClickAdd}>ADD</Button>
        </div>
    );
}

export default TodoAddBox;
