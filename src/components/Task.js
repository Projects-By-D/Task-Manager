import React from 'react'

const Task = ({ id, text, done, tasks, setTasks}) => {

    const handleCheckBtnClick = (id) => {
        setTasks(
            tasks.map(task => {
                if (task.id === id) {
                    task.done = !done;
                }
                return task
            }))
    }
    const handleDeleteBtnClick = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }
    
    return (
        <li className="single-task ">
            <p className="task-text"
                style={done ? {
                    textDecoration: 'line-through',
                    opacity: 0.35
                } : { textDecoration: 'none' }}
            >
                {text}
            </p>
            <div className="action-icons">
                <button className="btn-check" onClick={() => handleCheckBtnClick(id)}>
                    <i className="fa-solid fa-check"></i>
                </button>
                <button className="btn-del" onClick={()=> handleDeleteBtnClick(id)}>
                     <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
    )
}

export default Task
