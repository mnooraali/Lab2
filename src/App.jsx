import { ReactFragment, useState } from "react";
import { ViewTodo } from "./components/ViewTodo";
import { AddTodo } from "./components/AddTodoe";

export const App = () => {
  const [todos, setTodos] = useState([]);

  // const clickHandler = () => {
  //   const newtodo = {todoTitle : "This is Your new Toodo", todoBody : "This is my body"};
  //  setTodos ([...todos, newtodo]);
  // }

  const deleteHandler = () => {};

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <ReactFragment>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <AddTodo addTodo={addTodo} />
          </div>

          <div className="col-6">
            <ViewTodo
              todos={todos}
              onClick={clickHandler}
              onDelete={deleteHandler}
            />
          </div>
        </div>
      </div>
    </ReactFragment>
  );
};
