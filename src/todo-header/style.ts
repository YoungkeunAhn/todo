import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            color: theme.palette.text.primary,
            marginBottom: theme.spacing(2),
        },
        title: {
            letterSpacing: 5,
            fontWeight: 900,
        },
        margin: {
            marginLeft: theme.spacing(2),
        },
    })
);
