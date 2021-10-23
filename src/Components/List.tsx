import React from 'react'

interface TaskProps {
  task: {
    id: number,
    taskName: string
  },
  deleteTask(id: number): void
}

const List = ({task, deleteTask}: TaskProps) => {
  return (
    <div className="list-item">
      <div>
        {task.taskName}
      </div>
      <button className="btn btn-link" onClick={() => deleteTask(task.id)}>
        &times;
      </button>
    </div>
  )
}

export default List
