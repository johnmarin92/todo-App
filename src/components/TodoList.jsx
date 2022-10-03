import { TodoListItem } from "./TodoListItem";
import "animate.css";

export const TodoList = ({ todos, handleDelete, handleToogle }) => {
  return (
    <ul className="list-group list-group-flush animate__animated animate__heartBeat">
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={i}
          handleDelete={handleDelete}
          handleToogle={handleToogle}
        />
      ))}
    </ul>
  );
};
