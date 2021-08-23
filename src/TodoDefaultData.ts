export type TodoItems = {
    id: string;
    text: string;
    deleted: boolean;
    madeDate: string;
};

export const DEFAULT_TODO_ITEMS = [
    {
        id: "todo1",
        text: "Todo List 화면 만들기",
        deleted: false,
        madeDate: "2021. 8. 20.",
    },
    {
        id: "todo2",
        text: "Todo List Item 넘기기",
        deleted: false,
        madeDate: "2021. 8. 21.",
    },
    {
        id: "todo3",
        text: "Todo List Item 뿌리기",
        deleted: false,
        madeDate: "2021. 8. 22.",
    },
    {
        id: "todo4",
        text: "Todo List Item 삭제확인",
        deleted: true,
        madeDate: "2021. 8. 23.",
    },
];
