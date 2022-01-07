// This is the day that the lord has made i will rejoice and be glad in it;
import React, { useState, useEffect } from 'react'
import './App.css'
// Component Imports
import Header from './components/Header';
import InputForm from './components/InputForm';
import TaskUpdate from './components/TaskUpdate';
import Tasklist from './components/Tasklist';



const App = () => {

  const [tasks, setTasks] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);
  const [tasksNotDone, setTasksNotDone] = useState([])

  // filtered tasks
  const handleTasksDone = () => {
    setTasksDone(tasks.filter(task => task.done)) 
  }
  const handleTasksNotDone = () => {
    setTasksNotDone(tasks.filter(task => !task.done))
  }
  const saveTasksLocally = () => {
    localStorage.setItem('savedTasks', JSON.stringify(tasks))
  }

  // fetch tasks stored in local storage
  const getLocalTasks = async () => {
    if (localStorage.getItem('savedTasks') !== null) {
      await setTasks(JSON.parse(localStorage.getItem('savedTasks')))
    } else {
      await localStorage.setItem('savedTasks', JSON.stringify(tasks))
    }
  }

  useEffect(() => {
    getLocalTasks()
  }, [])

  useEffect(() => {
    handleTasksDone()
    handleTasksNotDone()
    saveTasksLocally()
  }, [tasks]) 

  return (
    <div className="app">
      <Header />
      <main>
        <section className="section-top">
          <InputForm
            tasks={tasks}
            setTasks={setTasks}
          />
          <TaskUpdate
            taskNumber={tasks.length}
            tasksNotDone={tasksNotDone.length}
            tasksDone={tasksDone.length}
          />
        </section>
        <section className="section-bottom">
          <Tasklist
            tasks={tasks}
            setTasks={setTasks}
          />
        </section>
      </main>
    </div>
  )
}


export default App
