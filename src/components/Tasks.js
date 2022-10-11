import Task from "./Task"

const Tasks = ({tasks, deleteTask, onToggle}) => {
  return (
    <>
      {tasks.map((task) => (
      <Task deleteTask={deleteTask} onToggle={onToggle} key={task.id} task={task} />
      ))}
    </>
  )
}

export default Tasks
