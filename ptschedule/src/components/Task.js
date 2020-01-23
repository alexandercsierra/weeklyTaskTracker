import React from 'react'

const Task = props => {
    const {task} = props;
    return (
        <div style={{border: '1px solid red', width: '50%', margin: '0 auto'}}>
            <p>{task.time}</p>
            <p>{task.activity}</p>
        </div>
    )
}

export default Task