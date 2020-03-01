import React, { useState, createContext, useEffect } from 'react';
import uuid from 'uuid/v1';

const TodoContextProvider = props => {
  const [todos, setTodo] = useState(() => {
    const localData = localStorage.getItem('todos');
    return localData
      ? JSON.parse(localData)
      : [
          { label: 'Dummy task 1', task: 'Learn how to react', id: uuid() },
          { label: 'Dummy task 2', task: 'Learn how to hooks', id: uuid() },
          { label: 'Dummy task 3', task: 'Learn how to context', id: uuid() }
        ];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (label, task) => {
    setTodo([...todos, { label, task, id: uuid() }]);
  };

  const removeTodo = id => {
    setTodo(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export const TodoContext = createContext();
export default TodoContextProvider;
