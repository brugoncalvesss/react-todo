import React from 'react'

interface TaskProps {
  task: {
    taskName: string,
    deadline: number
  },
  deleteTask(name: string): void
}

const TodoList = ({task, deleteTask}: TaskProps) => {
  return (
    <div className="list-item">
      <div>
        {task.taskName}
      </div>
      <button className="btn btn-link" onClick={() => deleteTask(task.taskName)}>
        &times;
      </button>
    </div>
  )
}

export default TodoList
