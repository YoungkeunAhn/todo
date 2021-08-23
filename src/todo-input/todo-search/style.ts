import { createStyles, makeStyles, Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(2),
            background: "#25273C",
        },
        searchWrap: {
            width: "100%",
        },

        searchBtn: {
            background: "#40c057",
            color: theme.palette.text.primary,
            fontWeight: 900,
            "&:hover": {
                background: "#2f9e44",
            },
        },
    })
);
