import { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
    const [ textData, setTextData ] = useState('');

    const handleChange = evt => {
        const { value } = evt.target;
        setTextData(value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        if (textData === '') return;
        addTodo(textData);
        setTextData('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='text'>Text
                <input onChange={handleChange} name='text' value={textData} />
            </label>
            <button>Add Task</button>
        </form>
    );
};

export default NewTodoForm;