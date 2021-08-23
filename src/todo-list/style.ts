import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: "#25273C",
            borderRadius: 4,
            padding: theme.spacing(0, 2),
            marginTop: theme.spacing(5),
            height: "45vh",
            overflow: "scroll",
            "&::-webkit-scrollbar": {
                display: "none",
            },
        },
        todoItem: {
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: theme.palette.text.secondary,
            padding: theme.spacing(2, 0),
        },
        itemContent: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
        },
        itemDate: {
            fontSize: "0.8rem",
            color: "#f1f3f5",
            letterSpacing: -1,
        },
        highlight: {
            color: theme.palette.secondary.main,
        },
        deleteButton: {
            color: theme.palette.secondary.light,
            letterSpacing: -1,
        },
    })
);
