import { Box, Container, ThemeProvider } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";
import theme from "./theme";
import TodoHeader from "./todo-header/TodoHeader";
import TodoWrapper from "./todo-input/TodoWrapper";
import Todos from "./Todos";

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.root}>
                <div className={classes.bgImg}></div>

                <Container maxWidth="sm" className={classes.position}>
                    <TodoHeader />
                    <TodoWrapper />
                    {/* <Todos / */}
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
