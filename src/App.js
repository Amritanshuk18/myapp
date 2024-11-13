import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    axios.get('/api/my_todo/')
      .then((response) => setTodos(response.data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  const addTodo = (todo) => {
    axios.post('/api/my_todo/', todo)
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => console.error('Error adding todo:', error));
  };

  const deleteTodo = (id) => {
    axios.delete(`/api/my_todo/${id}/`)
      .then(() => setTodos(todos.filter(todo => todo.id !== id)))
      .catch((error) => console.error('Error deleting todo:', error));
  };

  const markComplete = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    axios.put(`/api/my_todo/${id}/`, { ...todo, completed: !todo.completed })
      .then((response) => setTodos(todos.map((t) => t.id === id ? response.data : t)))
      .catch((error) => console.error('Error updating todo:', error));
  };

  const updateTodo = (updatedTodo) => {
    axios.put(`/api/my_todo/${updatedTodo.id}/`, updatedTodo)
      .then((response) => {
        setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? response.data : todo)));
        setEditTodo(null);
      })
      .catch((error) => console.error('Error updating todo:', error));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} editTodo={editTodo} updateTodo={updateTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} markComplete={markComplete} setEditTodo={setEditTodo} />
    </div>
  );
}

export default App;
