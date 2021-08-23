import { createStyles, makeStyles, Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "nowrap",
            background: "#25273C",
            padding: theme.spacing(0),
            border: "none",
            borderRadius: "3px",
        },
    })
);
