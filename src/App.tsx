import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import Compose from './Components/Compose';
import List from './Components/List';

interface ITask {
  taskName: string
}

const App: FC = () => {

  const [task, setTask] = useState<string>('')
  const [todo, setTodo] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    }
  }

  const saveTask = (): void => {
    const newTask = {
      taskName: task
    }
    setTodo([...todo, newTask])
    setTask('')
  }

  const deleteTask = (name: string): void => {
    const newTodo = todo.filter(task => {
      return task.taskName !== name
    })

    setTodo(newTodo)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="header">

          <div className="header-title">
            <h1>Task</h1>
          </div>

          <Compose
            task={task}
            onChange={handleChange}
            onSave={saveTask}
          />

        </div>
        <div className="list">

          {todo.map((task: ITask, key: number) => {
            return (
              <List
                task={task}
                key={key}
                deleteTask={deleteTask}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
