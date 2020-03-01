import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoContextProvider from './context/TodoContext';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <TodoContextProvider>
        <Header />
        <TodoList />
        <TodoForm />
      </TodoContextProvider>
    </div>
  );
};

export default App;
