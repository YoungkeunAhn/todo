import { Box, Container, createStyles, makeStyles, Theme, ThemeProvider } from "@material-ui/core";
import React from "react";
import theme from "./theme";
import TodoHeader from "./todo-header/TodoHeader";
import TodoWrapper from "./todo-input/TodoWrapper";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: "#211e20",
            height: "100vh",
            boxSizing: "border-box",
        },
        bgImg: {
            width: "100vw",
            height: "30vh",
            backgroundImage: `url('https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2020/10/background-ideas-20.jpg')`,
            backgroundRepeat: "repeat-x",
            opacity: 0.5,
        },
        position: {
            position: "relative",
            top: "-20vh",
        },
    })
);

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.root}>
                <div className={classes.bgImg}></div>
                <Container maxWidth="sm" className={classes.position}>
                    <TodoHeader />
                    <TodoWrapper />
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
