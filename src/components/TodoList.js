import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return todos.length ? (
    <div>
      <ul className="list">
        {todos.map(todo => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="list__empty">You have nothing to do ...</div>
  );
};

export default TodoList;
