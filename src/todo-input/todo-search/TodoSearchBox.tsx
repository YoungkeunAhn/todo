import { FormControl, InputAdornment, OutlinedInput } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useStyles } from "./style";

type Props = {
    //items: TodoItems[];
    onSearch: (searchText: string) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onReset: () => void;
    text: string;
};

// axios 를 이용해서  서버로부터 json파일을 다운로드하여
// const date = Date.now()
//const time = new Date().getTime()
// const timestamp = date / 1000 // ==> 12312312.1231

function TodoSearchBox(props: Props) {
    const { onSearch, onChange, onReset, text } = props;
    const classes = useStyles();

    const onKeyDownEnter = (event: React.KeyboardEvent, text: string) => {
        if (event.key === "Enter") {
            onSearch(text);
            onReset();
        }
    };

    return (
        <div className={classes.root}>
            <div>
                <FormControl variant="outlined" className={classes.searchWrap}>
                    <OutlinedInput
                        name="searchInput"
                        placeholder="Search todo..."
                        fullWidth
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                        value={text}
                        onChange={onChange}
                        onKeyDown={(e) => onKeyDownEnter(e, text)}
                    />
                </FormControl>
            </div>
        </div>
    );
}

export default TodoSearchBox;
