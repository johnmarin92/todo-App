import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

import "./styles.css";
import "animate.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);


  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // funcion que elimina los todos
  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };

  // funcion que se encarga de marcar y desmarcar los todos (lista de tareas)
  const handleToogle = (todoId) => {
    dispatch({
      type: "toogle",
      payload: todoId,
    });
  };

  // funcion que agrega todos
  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };


  return (
    <div className=" card bg-light text-black bg-opacity-5 p-2">
      <h1 className="text-center fw-bold animate__animated animate__pulse">
        TodoApp({todos.length})
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {
             todos.length 
            ? 
             (
              <TodoList
                todos={todos}
                handleDelete={handleDelete}
                handleToogle={handleToogle}
               />
             ) 
            : 
             (
              <p className="text-center fs-2 fw-bold text-danger animate__animated animate__bounceInLeft">No hay tareas pendientes </p>
             )
          }
        </div>

        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
        
      </div>
    </div>
  );
};
