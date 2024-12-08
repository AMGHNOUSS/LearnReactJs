import { useState } from 'react';
import './App.css';
import { useRef } from 'react';
import { FaTrash } from "react-icons/fa6";

function App() {

  const [todos, setTodos] = useState(["Test", "Go to Gym"]);
  const inputRef = useRef();
  const handleTodos = () => {
    const text = inputRef.current.value;
    setTodos([...todos, text]);
    inputRef.current.value = "";
  }
  const RemoveTodos = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className='App'>
      <h2>to do list</h2>
      <input ref={inputRef} placeholder='Enter Item...' />
      <button onClick={handleTodos}>Add</button>
      <div className='to-do-container'>
        <ul>
          {todos.map((item) => {
            return <li>
              {item}
              <FaTrash className='icon' onClick={RemoveTodos}/>
            </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
