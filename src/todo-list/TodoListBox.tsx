import { Button, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React from "react";
import { TodoItems } from "../TodoDefaultData";
import { useStyles } from "./style";

type Props = {
    items: TodoItems[];
    searchText: string;
    setItems: React.Dispatch<React.SetStateAction<TodoItems[]>>;
};

function TodoListBox(props: Props) {
    const items = props.items;
    const setItems = props.setItems;
    const searchText = props.searchText;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    //Todo 삭제
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
    return (
        <div className={classes.root}>
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
                        <div className={classes.todoItem}>
                            <div className={classes.itemContent}>
                                <div>{item.text}</div>
                                <div className={classes.itemDate}>{item.madeDate}</div>
                            </div>

                            <Button
                                className={classes.deleteButton}
                                onClick={(e) => {
                                    onClickDelete(e, item.text);
                                }}
                            >
                                delete
                            </Button>
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success">
                                    <span className={classes.highlight}>"{item.text}"</span> 아이템이 삭제되었습니다.
                                </Alert>
                            </Snackbar>
                        </div>
                    );
                })}
        </div>
    );
}

export default TodoListBox;
