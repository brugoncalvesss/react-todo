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
    <div className="todo-item">
      <div>
        {task.taskName} - {task.deadline}
      </div>
      <div>
        <button
          onClick={() => deleteTask(task.taskName)}
        >X</button>
      </div>
    </div>
  )
}

export default TodoList
