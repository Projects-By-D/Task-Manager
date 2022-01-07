import React, { useState } from 'react'

const InputForm = ({tasks, setTasks}) => {
    const [taskInput, setTaskInput] = useState('');

    const getTaskInput = (e) => {
        setTaskInput(e.target.value)
    }

    const addTaskToList = (e) => {
        e.preventDefault();
        if (taskInput === '') {
            console.log("Please enter a task or event");
            return;
        }
        setTasks([...tasks, {
            id: (tasks.length - 1) + 2,
            text: taskInput,
            done: false
        }])
        setTaskInput('')
    }
    return (

        <div className="input-section">
            <input type="text"
                value={taskInput}
                onChange={getTaskInput}
                autoFocus
            />
            <button className="add-btn" type="submit"
                onClick={addTaskToList}>Add Task</button>
        </div>
    )
}

export default InputForm;
