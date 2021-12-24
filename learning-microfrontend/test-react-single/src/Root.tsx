import { useState } from 'react';

type RootProps = {
  name: string
}

export function Root({ name }: RootProps) {
  const [counter, setCounter] = useState(0);

  const handleChange = (value) => {
    setCounter(oldCounter => oldCounter + value);
  }

  return (
    <>
      <h1>{name}</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => handleChange(-1)}>Decrment</button>
      <button onClick={() => handleChange(1)}>Incrment</button>
    </>
  )
}