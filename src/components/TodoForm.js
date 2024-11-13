import React, { useState, useEffect } from 'react';

function TodoForm({ addTodo, editTodo, updateTodo }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text);
    } else {
      setInput('');
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    if (editTodo) {
      updateTodo({ ...editTodo, text: input });
    } else {
      addTodo({ text: input });
    }

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a to-do..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button type="submit">{editTodo ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default TodoForm;

