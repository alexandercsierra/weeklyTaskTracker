import React, {useState, useEffect} from 'react'
import Task from './Task'
import weekDates from '../data/weekDates'
import styled from 'styled-components'

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
`;

const TaskList = props => {
    const [dateWeek, setDateWeek] = useState("");
    const [letterDay, setLetterDay] = useState("");
    const [capWeekName, setCapWeekName] = useState("");
    
    
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

            }, [])
                

            setLetterDay(letterWeek+props.currentDay);
            // setDateWeek(letterWeek)
            setDateWeek(props.tasks[letterDay])
            // setDateWeek(props.tasks["aThursday"])
            const weekName = letterDay[0];
            if (weekName){
                setCapWeekName(weekName.toUpperCase())
            }
            
            
        }
    },[props.currentDate])

    

    return (
        <div>
            <Title>Today is {props.currentDay} of {capWeekName} Week</Title>
            <CardContainer>

            {dateWeek ? dateWeek.map(task => {
                return <Task task={task}/>
            }): "loading"}
        </CardContainer>
        </div>
        
    )
}

export default TaskList