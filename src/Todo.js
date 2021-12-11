const Todo = ({ id, text, removeTask }) => {
    return (
        <li id={ id }>
            <p>{ text }</p>
            <button onClick={ removeTask }>X</button>
        </li>
    )
};

export default Todo;