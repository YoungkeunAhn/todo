import { FormControl, InputAdornment, OutlinedInput } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import { useStyles } from "./style";

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

    // const onClickSearchIcon = () => {
    //     onSearch(searchText);
    //     setSearchText("");
    // };

    return (
        <div className={classes.root}>
            <div>
                <FormControl variant="outlined" className={classes.searchWrap}>
                    <OutlinedInput
                        placeholder="Search todo..."
                        fullWidth
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                        value={searchText}
                        onChange={onChangeSearchText}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                onSearch(searchText);
                                setSearchText("");
                            }
                        }}
                    />
                </FormControl>
            </div>
        </div>
    );
}

export default TodoItemSearchInput;
