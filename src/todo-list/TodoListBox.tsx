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
    const { items, setItems, searchText } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    //Todo 삭제
    const onDelete = (event: React.MouseEvent, text: string) => {
        setItems(items.filter((item) => item.content !== text));
        setOpen(true);
    };
    //snackBar 닫기
    const snackClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    //이벤트 호출 함수
    const onClickDeleteBtn = (event: React.MouseEvent, text: string) => {
        onDelete(event, text);
    };

    return (
        <div className={classes.root}>
            {items
                .filter((it) => {
                    if (searchText && searchText.length > 0) {
                        return it.content.indexOf(searchText) >= 0;
                    } else {
                        return it;
                    }
                })
                .map((item) => {
                    return (
                        <div className={classes.todoItem}>
                            <div className={classes.itemContent}>
                                <div>{item.content}</div>
                                <div className={classes.itemDate}>{item.timestamp}</div>
                            </div>

                            <Button
                                className={classes.deleteButton}
                                onClick={(e) => {
                                    onClickDeleteBtn(e, item.content);
                                }}
                            >
                                delete
                            </Button>
                            <Snackbar open={open} autoHideDuration={1000} onClose={snackClose}>
                                <Alert onClose={snackClose} severity="success">
                                    <span className={classes.highlight}>"{item.content}"</span> 아이템이 삭제되었습니다.
                                </Alert>
                            </Snackbar>
                        </div>
                    );
                })}
        </div>
    );
}

export default TodoListBox;
