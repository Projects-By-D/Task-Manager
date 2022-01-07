import React from 'react'
import Task from './Task'


const Tasklist = ({ tasks, setTasks, getTasksDone }) => {
    
    return (
        <ul className="tasks">
            {tasks.map(task => (
                <Task key={task.id}
                    id={task.id}
                    text={task.text}
                    done={task.done}
                    tasks={tasks}
                    setTasks={setTasks}
                />
            ))}
        </ul>
    )
}

export default Tasklist
