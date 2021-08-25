import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { TodoItems } from "../../TodoDefaultData";
import { useStyles } from "./style";

type Props = {
    setItems: React.Dispatch<React.SetStateAction<TodoItems[]>>;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onReset: () => void;
    text: string;
};

function TodoAddBox(props: Props) {
    const { setItems, onReset, onChange, text } = props;
    const classes = useStyles();

    const onCreate = () => {
        const newItem = {
            id: `${new Date().getTime() / 1000}`,
            content: text,
            timestamp: `${new Date().getTime() / 1000}`,
        };

        setItems((prev) => prev.concat([newItem]));
        axios.post("http://localhost:3001/todos", newItem);
        onReset();
    };

    const onClickAddButton = () => {
        onCreate();
    };
    const onKeyDownEnter = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            onCreate();
            onReset();
        }
    };

    return (
        <div className={classes.root}>
            <TextField
                name="addInput"
                value={text}
                onChange={onChange}
                fullWidth
                label="Add Todo"
                variant="outlined"
                onKeyDown={(e) => {
                    onKeyDownEnter(e);
                }}
            />
            <Button onClick={onClickAddButton}>ADD</Button>
        </div>
    );
}

export default TodoAddBox;
