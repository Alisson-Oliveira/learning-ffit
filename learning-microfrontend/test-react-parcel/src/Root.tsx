import { useState, useEffect } from 'react';
// @ts-ignore
import { listenEvent } from '@ffit/test-react-utils';

export function Root({ name }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    listenEvent(
      '@ffit/test-react-parcel-add/todo/add-task', 
      event => {
        setTasks(oldTasks => [
          ...oldTasks,
          event.detail
        ])
      }
    )
  }, [])

  return (
    <>
      <h1>@ffit/test-react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map(task => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.describe}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}