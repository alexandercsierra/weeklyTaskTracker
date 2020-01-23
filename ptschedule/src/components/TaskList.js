import React, {useState, useEffect} from 'react'
import Task from './Task'
import weekDates from '../data/weekDates'

const TaskList = props => {
    console.log("taskList", props.dailyTasks)
    const [dateWeek, setDateWeek] = useState("");
    const [letterDay, setLetterDay] = useState("");

    
    
    useEffect(()=>{
        const month = weekDates[props.currentDate[0]];
        if (month){
            const month = weekDates[props.currentDate[0]];
            let values = Object.values(month);
            let day = props.currentDate[1];

            let letterWeek = "";
            values[0].forEach(date => {

                if (date===Number(day)){
                    console.log("match")
                    return letterWeek = "a"
                }

            })
            values[1].forEach(date => {

                if (date===Number(day)){
                    console.log("match")
                    return letterWeek = "b"
                }

            })
                

            setLetterDay(letterWeek+props.currentDay);
            // setDateWeek(letterWeek)
            setDateWeek(props.tasks[letterDay])
            // setDateWeek(props.tasks["aThursday"])
            
        }
    },[props.currentDate])

    const weekName = letterDay[0]

    return (
        <div>
<h1>{props.currentDay}, {weekName} Week</h1>
            {dateWeek ? dateWeek.map(task => {
                return <Task task={task}/>
            }): "loading"}
        </div>
    )
}

export default TaskList