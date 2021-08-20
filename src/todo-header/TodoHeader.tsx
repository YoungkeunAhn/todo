import { Box, Button, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: theme.palette.text.primary,
            color: "white",
            padding: theme.spacing(5),
        },
        nav: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& * ": {
                margin: theme.spacing("auto", 1),
            },
            "& .MuiButton-text": {
                color: "white",
            },
        },
    })
);

function TodoHeader() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h4" align="center" gutterBottom>
                TodoList
            </Typography>
            <div className={classes.nav}>
                <Button>Home</Button>
                <span>|</span>
                <Button>About</Button>
            </div>
        </Box>
    );
}

export default TodoHeader;
