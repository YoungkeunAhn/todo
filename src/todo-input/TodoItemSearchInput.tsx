import { createStyles, IconButton, makeStyles, Paper, TextField, Theme } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import { TodoItems } from "./TodoInput";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
        },
        flexBox: {
            display: "flex",
            flexWrap: "nowrap",
        },
        searchResult: {
            display: "block",
            padding: theme.spacing(1),
            borderBottom: "1px solid lightgray",
        },
    })
);

type Props = {
    //items: TodoItems[];
    onSearch: (searchText: string) => void;
};

function TodoItemSearchInput(props: Props) {
    const { onSearch } = props;
    const classes = useStyles();
    const [searchText, setSearchText] = useState("");

    const onChangeSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const onClickSearchIcon = () => {
        // setSearchItem(items.filter((item) => item.text.includes(searchText)));
        // setSearchText("");
        onSearch(searchText);
    };

    return (
        <div>
            <div className={classes.flexBox}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={searchText}
                    onChange={onChangeSearchText}
                    fullWidth
                    placeholder="검색어"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onSearch(searchText);
                        }
                    }}
                />

                <IconButton onClick={onClickSearchIcon}>
                    <SearchIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default TodoItemSearchInput;
