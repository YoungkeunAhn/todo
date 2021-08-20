import { createStyles, IconButton, List, ListItemText, makeStyles, Snackbar, Theme } from "@material-ui/core";
import React from "react";
import { TodoItems } from "../todo-input/TodoInput";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Alert from "@material-ui/lab/Alert";

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
type Props = {
    items: TodoItems[];
};
function TodoList(props: Props) {
    const classes = useStyles();
    const items = props.items;
    const [open, setOpen] = React.useState(false);

    // const onClickDelete = (event: React.MouseEvent, text: string) => {
    //     setItems(items.filter((item) => item.text !== text));
    //     setOpen(true);
    // };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    return (
        <div></div>
        // <List>
        //     {items.map((item) => {
        //         return (
        //             <ListItemText className={classes.listItem}>
        //                 {item.text}{" "}
        //                 <IconButton
        //                     onClick={(event) => {
        //                         onClickDelete(event, item.text);
        //                     }}
        //                 >
        //                     <DeleteForeverIcon />
        //                 </IconButton>
        //                 <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        //                     <Alert onClose={handleClose} severity="success">
        //                         <span className={classes.highlight}>"{item.text}"</span> 아이템이 삭제되었습니다.
        //                     </Alert>
        //                 </Snackbar>
        //             </ListItemText>
        //         );
        //     })}
        // </List>
    );
}

export default TodoList;
