import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import React, { useState } from "react";
import { TodoItems } from "../../TodoDefaultData";
import { useStlyes } from "./style";

type Props = {
    setItems: React.Dispatch<React.SetStateAction<TodoItems[]>>;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onReset: () => void;
    text: string;
};
//다이얼로그 슬라이드
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function TodoDialogBox(props: Props) {
    const classes = useStlyes();
    const { setItems, onReset, onChange, text } = props;
    const [open, setOpen] = useState(false);

    //다이얼로그 함수
    const onCloseDialog = () => {
        setOpen(false);
        onReset();
    };
    const onOpenDialog = () => {
        setOpen(true);
    };

    //todo 생성
    const onCreate = () => {
        const newItem = {
            id: `${new Date().getTime() / 1000}`,
            content: text,
            timestamp: `${new Date().getTime() / 1000}`,
        };
        if (newItem.content !== "") {
            axios.post("http://localhost:3001/todos", newItem);
            setItems((prev) => prev.concat(newItem));
        }

        onReset();
    };

    //이벤트 호출 함수
    const onClickAddBtn = () => {
        onCreate();
    };

    const onKeyDownEnter = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            onCreate();
        }
    };

    return (
        <Box component="div" className={classes.root}>
            <Button className={classes.addButton} variant="contained" color="primary" onClick={onOpenDialog}>
                <AddIcon />
            </Button>

            <Dialog className={classes.dialogBox} open={open} TransitionComponent={Transition} keepMounted onClose={onCloseDialog}>
                <DialogTitle>Todo 추가</DialogTitle>
                <DialogContent>
                    <TextField
                        name="dialogAddInput"
                        value={text}
                        onChange={onChange}
                        fullWidth
                        required
                        focused
                        label="Input todo"
                        color="primary"
                        placeholder="Input todo text..."
                        onKeyDown={(e) => {
                            onKeyDownEnter(e);
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={onClickAddBtn}>
                        추가
                    </Button>
                    <Button color="secondary" onClick={onCloseDialog}>
                        닫기
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default TodoDialogBox;
