import { useState, useEffect } from 'react';

const data = {
  data: true,
  finish: '2021/08/02 07:59:01',
  fondo: '/static/Webfondo.png',
  img: '/static/Web.png',
  init: '2021/07/28 07:59:00'
};

const useCustomCounter = (initialState = 0) => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      const response = await JSON.stringify(data);
      setNotes(response);
    };
    fetchNotes();
  });
  const [counter, setCounter] = useState(initialState);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return {
    value: counter,
    increment,
    decrement,
    notes
  };
};

export default function App() {
  const { value, notes, increment, decrement } = useCustomCounter();
  const counter2 = useCustomCounter(20);
  return (
    <div>
      <p> {value} </p>
      <p> {notes} </p>
      <p> {counter2.value} </p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
