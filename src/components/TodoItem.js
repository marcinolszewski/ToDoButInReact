import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoItem = ({ todo }) => {
  const { removeTodo } = useContext(TodoContext);

  const deleteListItem = () => {
    removeTodo(todo.id);
  };
  return (
    <li className="list__item">
      <p>
        <span className="list__item--label">{todo.label}</span> <br />
        <span className="list__item--task">{todo.task}</span>
        <span className="list__item--del" onClick={deleteListItem}>
          X
        </span>
      </p>
    </li>
  );
};
export default TodoItem;
