import { createTheme } from "@material-ui/core";

const theme = createTheme({
    spacing: 8,
    palette: {
        text: {
            primary: "#fafafa",
            secondary: "#ced4da",
        },
    },
    typography: {
        fontFamily: "'Noto Sans KR', sans-serif",
    },
});

export default theme;
