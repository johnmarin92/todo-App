import "animate.css";

export const TodoListItem = ({ todo, index, handleDelete, handleToogle }) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        onClick={() => handleToogle(todo.id)}
        className={`${todo.done && "complete"}`}
      >
        {index + 1}. {todo.desc}
      </p>
      <button
        className="btn btn-danger bi bi-x-circle-fill"
        onClick={() => handleDelete(todo.id)}
      ></button>
    </li>
  );
};
