import { createSlice } from "@reduxjs/toolkit";

const ToDoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.isCompleted = !todo.isCompleted;
            }
        },
    },
});

export const { addTodo, toggleTodo } = ToDoSlice.actions;

export default ToDoSlice.reducer;