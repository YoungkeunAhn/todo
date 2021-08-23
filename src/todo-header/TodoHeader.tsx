import { Box, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";

function TodoHeader() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h4" component="span" className={classes.title}>
                T O D O
            </Typography>
            <Typography variant="subtitle2" component="span" className={classes.margin}>
                {new Date().toLocaleDateString("kr-ko", { weekday: "long", year: "numeric", month: "short", day: "numeric" })}
            </Typography>
        </Box>
    );
}

export default TodoHeader;
