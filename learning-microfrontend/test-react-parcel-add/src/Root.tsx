import { useState } from 'react';
import Parcel from 'single-spa-react/parcel';
import { v4 as uuid } from 'uuid';
// @ts-ignore
import { emitEvent } from '@ffit/test-react-utils';

export function Root({ name }) {
  const [task, setTask] = useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const handleSubmit = (event) => { 
    event.preventDefault();

    emitEvent(
      '@ffit/test-react-parcel-add/todo/add-task', {
        id: uuid(),
        describe: task
      }
    );

    setTask('');
  }

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>Add</button>
      </form>
      <Parcel 
        config={() => System.import('@ffit/test-react-parcel')}
      />
    </>
  )
}