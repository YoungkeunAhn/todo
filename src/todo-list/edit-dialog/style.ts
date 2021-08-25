import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        editButton: {
            color: theme.palette.primary.dark,
            letterSpacing: -1,
        },
        dialogBox: {
            "& .MuiDialog-paper": {
                background: "#25273C",
            },
        },
    })
);
