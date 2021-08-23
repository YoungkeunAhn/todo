import { createStyles, makeStyles, Theme } from "@material-ui/core";
export const useStlyes = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "center",
            marginTop: theme.spacing(4),
        },
        addButton: {
            borderRadius: "50%",
            padding: theme.spacing(2),
        },
        dialogBox: {
            "& .MuiDialog-paper": {
                background: "#25273C",
            },
        },
        dialogTextColor: {
            color: "#212529",
        },
    })
);
