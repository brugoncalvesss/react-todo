import React, { ChangeEvent } from 'react'

interface ComposeProps {
  task: string,
  onChange(event: ChangeEvent<HTMLInputElement>): void,
  onSave(): void
}

const Compose = ({task, onChange, onSave}: ComposeProps) => {

  return (
    <div>
      <div className="input-group">
        <input
          type="text"
          placeholder="New task..."
          name="task"
          className="form-control"
          value={task}
          onChange={onChange}
          autoComplete="off"
        />

        <button
          type="submit"
          className="btn btn-primary"
          onClick={onSave}
        >Save Task</button>
      </div>
    </div>
  )
}

export default Compose
