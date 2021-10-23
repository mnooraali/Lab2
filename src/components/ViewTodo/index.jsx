import { ReactFragment } from "react";
import { AddTodo } from "../../ViewTodo/AddTodo";
 
export const ViewTodo =  (props) => {
    return (
        <ReactFragment>
            <h2> Welcome To Show Your Todo </h2>
            <button className="btn btn-danger m-3" onClick={props.clickHandler}>Add</button>
            <button className="btn btn-danger m-3" onClick={props.deleteHandler}>Delete</button>

            {props.todos.map((todo) => ( <AddTodo todoTitle={props.todoTitle} todoBody={todoBody} />) )}
        </ReactFragment>
    );
}