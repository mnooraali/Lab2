import { ReactFragment, useState } from "react";
import { Input } from "../Input";


export const AddTodo = (props) => {
    const [todoTitle, setTodoTitle] = useState("Set Your new Toodo");
    const [todoBody, setTodoBody] = useState("Set your Todo Description");

    // const todoTitleChangeHandler =  () => {
    //     setTodoTitle(event.target.value);
    // }

    // const todoBodyChangeHandler = () => {
    //     setTodoBody(event.target.value);
    // }

    const submitHandler = () => {
        props.addTodo({todoTitle, todoBody})
    }

    return (
        <ReactFragment className="card">
            <h1>Add New Todo</h1>
       
            <Input value={todoTitle} setValue={setTodoTitle} label="todoTitle"/>
            <Input value={todoBody} setValue={setTodoBody} label="todoBody" />

            <button className="btn btn-primary" onClick={submitHandler}>Add To Todo List </button>
        </ReactFragment>
    );
}