import { Box, Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Slide, TextField, Theme } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import { TodoItems } from "../../TodoDefaultData";
import { useStlyes } from "./style";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
    setItems: React.Dispatch<React.SetStateAction<TodoItems[]>>;
};

function AddDialog(props: Props) {
    const classes = useStlyes();
    const setItems = props.setItems;
    const [open, setOpen] = useState(false);
    const [dialogText, setDialogText] = useState("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDialogText(event.target.value);
    };

    const onClose = () => {
        setOpen(false);
        setDialogText("");
    };

    const clickAddButton = () => {
        setOpen(true);
    };
    const onCreateTodoItem = () => {
        const newItem = [
            {
                id: `${new Date()}`,
                text: dialogText,
                deleted: false,
                madeDate: `${new Date().toLocaleDateString("kr-ko", { year: "2-digit", month: "2-digit", day: "2-digit" })}`,
            },
        ];
        setItems((prev) => prev.concat(newItem));
        setDialogText("");
    };

    return (
        <Box component="div" className={classes.root}>
            {/* 플러스 버튼 */}
            <Button className={classes.addButton} variant="contained" color="primary" onClick={clickAddButton}>
                <AddIcon />
            </Button>

            {/* 다이얼로그 */}
            <Dialog className={classes.dialogBox} open={open} TransitionComponent={Transition} keepMounted onClose={onClose}>
                <DialogTitle>Todo 추가</DialogTitle>
                <DialogContent>
                    <TextField
                        focused
                        value={dialogText}
                        onChange={onChange}
                        fullWidth
                        label="Input todo"
                        color="primary"
                        placeholder="Input todo text..."
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                onCreateTodoItem();
                                setOpen(true);
                            }
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={onCreateTodoItem}>
                        추가
                    </Button>
                    <Button color="secondary" onClick={onClose}>
                        닫기
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default AddDialog;
