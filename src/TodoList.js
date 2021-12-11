import Todo from './Todo.js';
import NewTodoForm from './NewTodoForm.js'
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const TodoList = ({ initialData }) => {
    const [ todos, setTodos ] = useState(initialData || []);

    const addTodo = text => {
        setTodos(tasks => [...tasks, { id: uuid(), text }]);
    };

    const removeTask = evt => {
        const targetId = evt.target.parentElement.id;
        console.log(targetId);
        setTodos(tasks => tasks.filter(({ id }) => id !== targetId));
    };

    return (
        <>
            <NewTodoForm addTodo={addTodo} key={uuid()} />
            <ul>
            {todos.map(({ id, text }) => (
                <Todo id={id} text={text} key={id} removeTask={removeTask} />
            ))}
            </ul>
        </>
    );
};

export default TodoList;