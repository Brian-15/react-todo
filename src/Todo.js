const Todo = ({ id, text, removeTask }) => {
    return (
        <li id={ id } key={id} data-testid='task'>
            <p>{ text }</p>
            <button onClick={ removeTask } data-testid='remove-btn'>X</button>
        </li>
    )
};

export default Todo;