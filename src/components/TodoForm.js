import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [task, setTask] = useState('');
  const [label, setLabel] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(label, task);
    setTask('');
    setLabel('');
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={label}
        onChange={e => setLabel(e.target.value)}
        required
        placeholder="Todo label..."
        className="form__input"
      />
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        required
        placeholder="What's to do..."
        className="form__input"
      />
      <input type="submit" value="Add task" className="form__submit" />
    </form>
  );
};

export default TodoForm;
