import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TodoItems } from "../../TodoDefaultData";
import { useStyles } from "./style";

type Props = {
    item: TodoItems;
    // getTodoData: Promise<JSX.Element | undefined>;
};

function TodoEditDialog(props: Props) {
    const classes = useStyles();
    const { item } = props;
    const [open, setOpen] = React.useState(false);
    const [editText, setEditText] = useState<string>(item.content);

    const editDialogOpen = () => {
        setOpen(true);
    };

    const editDialogClose = () => {
        setOpen(false);
    };

    const onClickEditBtn = () => {
        editDialogOpen();
    };
    const onClickUpdateBtn = () => {
        axios.put(`http://localhost:3001/todos/${item.id}`, {
            content: editText,
            timestamp: item.timestamp,
        });

        editDialogClose();
    };
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditText(event.target.value);
    };

    return (
        <div>
            <Button className={classes.editButton} onClick={onClickEditBtn}>
                edit
            </Button>
            <Dialog open={open} onClose={editDialogClose} className={classes.dialogBox}>
                <DialogTitle>수정하기</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" label="Edit Todo" fullWidth value={editText} onChange={onChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClickUpdateBtn} color="primary">
                        수정
                    </Button>
                    <Button onClick={editDialogClose} color="primary">
                        취소
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default TodoEditDialog;
