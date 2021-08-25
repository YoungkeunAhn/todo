import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
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
