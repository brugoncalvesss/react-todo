import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList';

interface ITask {
  taskName: string,
  deadline: number
}

const App: FC = () => {

  const [task, setTask] = useState<string>('')
  const [todo, setTodo] = useState<ITask[]>([])
  const [deadline, setDeadline] = useState<number>(0)

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    }

    if (event.target.name === 'priority') {
      setDeadline(Number(event.target.value))
    }
  }

  const saveTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline
    }
    setTodo([...todo, newTask])
    setTask('')
    setDeadline(0)
  }

  const deleteTask = (name: string): void => {
    const newTodo = todo.filter(task => {
      return task.taskName !== name
    })

    setTodo(newTodo)
  }

  return (
    <div className="App">
      <div className="Container">
        <div className="header">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Priority"
            name="priority"
            value={deadline}
            onChange={handleChange}
          />
          <button
            type="submit"
            onClick={saveTask}
          >Save Task</button>
        </div>
        <div className="task">
          {todo.map((task: ITask, key: number) => {
            return (
              <TodoList
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
