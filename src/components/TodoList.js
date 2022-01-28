import React, {useState} from 'react';
import TodoForm from './TodoForm';

function TodoList() {
  const [todo, setTodos] = useState([])

  return <div>
      <h1> What's the Plan for today?</h1>
      <TodoForm />
  </div>;
}

export default TodoList;
