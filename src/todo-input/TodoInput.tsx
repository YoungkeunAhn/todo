import { Box, Button, createStyles, IconButton, makeStyles, Snackbar, TextField, Theme } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Alert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import TodoItemSearchInput from "./TodoItemSearchInput";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
        },
        flexBox: {
            display: "flex",
            flexWrap: "nowrap",
        },
        searchResult: {
            display: "block",
            padding: theme.spacing(1),
            borderBottom: "1px solid lightgray",
        },
        listItem: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        highlight: {
            color: theme.palette.secondary.main,
        },
    })
);
export type TodoItems = {
    id: string;
    text: string;
    deleted: boolean;
};

const DEFAULT_TODO_ITEMS = [
    {
        id: "todo1",
        text: "Todo List 화면 만들기",
        deleted: false,
    },
    {
        id: "todo2",
        text: "Todo List Item 넘기기",
        deleted: false,
    },
    {
        id: "todo3",
        text: "Todo List Item 뿌리기",
        deleted: false,
    },
    {
        id: "todo4",
        text: "Todo List Item 삭제확인",
        deleted: true,
    },
];

function TodoInput() {
    const classes = useStyles();
    const [items, setItems] = useState<TodoItems[]>(DEFAULT_TODO_ITEMS);
    const [todoText, setTodoText] = useState("");
    const [searchText, setSearchText] = useState<string>();
    const [open, setOpen] = React.useState(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(event.target.value);
    };

    const onClickSubmit = () => {
        createTodoItem2();
    };
    /*
    const createTodoItem = () => {
        setItems([
            ...items,
            {
                id: `${Date.now()}`,
                text: todoText,
                deleted: false,
            },
        ]);
        setTodoText("");
    };
*/
    const createTodoItem2 = () => {
        const newItem = {
            id: `${Date.now()}`,
            text: todoText,
            deleted: false,
        };

        // setItems((prev) => {
        //     return [...prev, newItem];
        // });

        setItems((prev) => prev.concat([newItem]));
        setTodoText("");
    };

    const onClickDelete = (event: React.MouseEvent, text: string) => {
        setItems(items.filter((item) => item.text !== text));
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const onSearch = (text: string) => {
        setSearchText(text);
    };

    return (
        <Box className={classes.root} component="div">
            <TodoItemSearchInput onSearch={onSearch} />

            <div className={classes.flexBox}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={todoText}
                    onChange={onChange}
                    fullWidth
                    placeholder="Add Todo..."
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onClickSubmit();
                        }
                    }}
                />
                <Button variant="contained" color="primary" onClick={onClickSubmit}>
                    SUBMIT
                </Button>
            </div>
            {/* <TodoList items={items} /> */}
            <div>
                {items
                    .filter((it) => {
                        if (searchText && searchText.length > 0) {
                            return it.text.indexOf(searchText) >= 0;
                        } else {
                            return it;
                        }
                    })
                    .map((item) => {
                        return (
                            <div className={classes.listItem}>
                                {item.text}{" "}
                                <IconButton
                                    onClick={(e) => {
                                        onClickDelete(e, item.text);
                                    }}
                                >
                                    <DeleteForeverIcon />
                                </IconButton>
                                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="success">
                                        <span className={classes.highlight}>"{item.text}"</span> 아이템이 삭제되었습니다.
                                    </Alert>
                                </Snackbar>
                            </div>
                        );
                    })}
            </div>
        </Box>
    );
}

export default TodoInput;
