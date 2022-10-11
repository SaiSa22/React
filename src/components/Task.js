import React from 'react'

const Task = ({task, deleteTask, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text} <p onClick={() => deleteTask(task.id)} style={{color: 'red', cursor: 'pointer'}}>X</p></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
