import React from 'react';

function TodoItem({ todo, deleteTodo, markComplete, setEditTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span onClick={() => markComplete(todo.id)}>{todo.text}</span>
      <button onClick={() => setEditTodo(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
