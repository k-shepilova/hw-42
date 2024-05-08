import { useSelector } from "react-redux";
import ToDo from "../ToDo";

export default function ToDoList() {
    const todos = useSelector((state) => state.todos);

    return (
        <div>
            {todos.map((todo) => (
                <ToDo key={todo.id} todo={todo} />
            ))}
        </div>
    );
}