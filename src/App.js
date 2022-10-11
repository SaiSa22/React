import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Something to do 1',
        day: 'Feb 5th, 2021',
        reminder: true
    },
    {
        id: 2,
        text: 'Something to do 2',
        day: 'Feb 6th, 2021',
        reminder: true
    },
    {
        id: 3,
        text: 'Something to do 3',
        day: 'Feb 7th, 2021',
        reminder: true
    }

])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random()*100)
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}


//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task))
}

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} title='Task Tracker' showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length >0 ? <Tasks deleteTask={deleteTask} onToggle={toggleReminder} tasks={tasks} />:'All Done'}
    </div>

  );
}

export default App;
