import { Box, Container, ThemeProvider } from "@material-ui/core";
import React from "react";
import theme from "./theme";
import TodoHeader from "./todo-header/TodoHeader";
import TodoInput from "./todo-input/TodoInput";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <TodoHeader />
                <Container>
                    <TodoInput />
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
