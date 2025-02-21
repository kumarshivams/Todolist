import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { task: "Sample Task", id: uuidv4(), isDone: false },
    ]);
    const [newTodo, setNewTodo] = useState('');

    const addNewTask = () => {
        if (newTodo.trim() !== "") {
            setTodos((prevTodos) => [
                ...prevTodos,
                { task: newTodo, id: uuidv4(), isDone: false },
            ]);
            setNewTodo("");
        }
    };

    const updateTodovalue = (event) => {
        setNewTodo(event.target.value);
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, isDone: true } : todo
            )
        );
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input 
                placeholder="Add a task" 
                value={newTodo} 
                onChange={updateTodovalue}
            />
            <br />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /> <br />
            <hr />
            <h4>Task Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecoration: "line-through" } : {}}> 
                            {todo.task}
                        </span>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <button onClick={() => markAsDone(todo.id)}>Done</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
