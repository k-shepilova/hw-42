import { useDispatch } from "react-redux";
import { toggleTodo } from "../../store/ToDoSlice";

export default function ToDo({ todo }) {
    const dispatch = useDispatch();
    const { id, task, isCompleted } = todo;

    return (
        <label
            style={{
                textDecoration: isCompleted ? "line-through" : "none",
            }}
            className="todo-item"
        >
            <input
                onChange={() => dispatch(toggleTodo(id))}
                type="checkbox"
                checked={isCompleted}
            />
            {task}
        </label>
    );
}