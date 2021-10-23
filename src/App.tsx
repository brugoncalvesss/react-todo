import React, { ChangeEvent, FC, useState } from 'react'
import './App.css'
import Compose from './Components/Compose'
import List from './Components/List'

interface ITodo {
  id: number,
  taskName: string
}

const App: FC = () => {

  const [task, setTask] = useState<string>('')
  const [todo, setTodo] = useState<ITodo[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value)
  }

  const saveTask = (): void => {

    if (task.length < 1) {
      return
    }

    const newTask = {
      id: Math.ceil(Math.random() * 1000),
      taskName: task
    }
    setTodo([...todo, newTask])
    setTask('')
  }

  const deleteTask = (id: number): void => {
    const newTodo = todo.filter(task => {
      return task.id !== id
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

          {todo.map((task: ITodo, key: number) => {
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

export default App