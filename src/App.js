import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/";
import { addTodo } from "./store/ToDoSlice";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import "./App.css";

export default function App() {
    useEffect(() => {
        const initialTodos = [
            { id: 1, task: "Todo 1", isCompleted: false },
            { id: 2, task: "Todo 2", isCompleted: false },
            { id: 3, task: "Todo 3", isCompleted: false },
            { id: 4, task: "Todo 4", isCompleted: false },
            { id: 5, task: "Todo 5", isCompleted: false },
        ];

        initialTodos.forEach((todo) => {
            const existingTodo = store.getState().todos.find((t) => t.id === todo.id);
            if (!existingTodo) {
                store.dispatch(addTodo(todo));
            }
        });
    }, []);

    return (
        <Provider store={store}>
            <div className="todo-wrapper">
                <h1>ToDo List</h1>
                <ToDoList />
                <NewToDo />
            </div>
        </Provider>
    );
}
