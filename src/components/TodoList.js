import React from 'react';
// import TodoItem from './TodoItem';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, markComplete, setEditTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          markComplete={markComplete}
          setEditTodo={setEditTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
