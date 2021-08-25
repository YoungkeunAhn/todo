import { Button, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import TodoEditDialog from "./edit-dialog/TodoEditDialog";
import { TodoItems } from "../TodoDefaultData";
import { useStyles } from "./style";

type Props = {
    items: TodoItems[];
    searchText: string;
    setItems: React.Dispatch<React.SetStateAction<TodoItems[]>>;
};

type todoType = {
    id: string;
    content: string;
    timestamp: string;
};

function TodoListBox(props: Props) {
    const { items, setItems, searchText } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState<Error>();
    const [loading, setLoading] = useState(false);

    //json 객체 가져오기 - 비동기
    const getTodoData = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3001/todos");
            setItems(response.data);
            setLoading(false);
        } catch (e) {
            setError(e);
        }

        if (loading) return <div>로딩중</div>;
        if (error) return <div>에러발생</div>;
        if (!items) return <div>todo 가져오기 실패</div>;
    };

    useEffect(() => {
        getTodoData();
    }, []);

    //Todo 삭제
    const onDelete = (event: React.MouseEvent, id: string) => {
        console.log(id);
        axios.delete(`http://localhost:3001/todos/${id}`);
        setItems(items.filter((item) => item.id !== id));
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
                    // console.log(item);
                    return (
                        <div key={item.id} className={classes.todoItem}>
                            <div className={classes.itemContent}>
                                <div>{item.content}</div>
                                <div className={classes.itemDate}>{item.timestamp}</div>
                            </div>
                            <TodoEditDialog item={item} />
                            <Button
                                className={classes.deleteButton}
                                onClick={(e) => {
                                    onClickDeleteBtn(e, item.id);
                                }}
                            >
                                delete
                            </Button>
                            <Snackbar open={open} autoHideDuration={1000} onClose={snackClose}>
                                <Alert onClose={snackClose} severity="success">
                                    <span className={classes.highlight}>"{item.content}"</span>
                                    아이템이 삭제되었습니다.
                                </Alert>
                            </Snackbar>
                        </div>
                    );
                })}
        </div>
    );
}

export default TodoListBox;
