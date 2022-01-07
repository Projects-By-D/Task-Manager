import React from 'react'

const TaskUpdate = ({ taskNumber, tasksDone, tasksNotDone }) => {

    return (
        <div className="events">
            <p>Tasks: <span className="task-amount">{taskNumber}</span></p>
            <p>Done: <span className="task-amount">{tasksDone}</span></p>
            <p>Undone: <span className="task-amount">{tasksNotDone}</span></p>
        </div>
    )
}

export default TaskUpdate
