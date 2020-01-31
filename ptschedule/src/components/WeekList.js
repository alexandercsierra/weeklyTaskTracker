import React, {useState, useEffect} from 'react'
import tasks from '../data/tasks'
import styled from 'styled-components'
import Week from './Week'

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // border: 1px solid red;
`;

const Title = styled.h1`
    color: white;
    text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
    @media(max-width: 570px){
        font-size: 1.35rem;
    }
`;

const WeekList = (props) => {
    const {week} = props;
    const [weekList, setWeekList] = useState([]);
    const [dayNames, setDayNames] = useState([]);

    useEffect(()=>{
        
        if (week === 'a'){
            const keys = Object.keys(tasks);
            const filteredKeys = keys.filter(key => key.includes('b') === false);
            const weekArrs = filteredKeys.map(key => tasks[key]);
            
            const justDayNames = filteredKeys.map(key => {
               key = key.substring(1);
               console.log(key);
            })
            
            // setDayNames(justDayNames);
            setDayNames(filteredKeys);
            

            const vals = Object.values(tasks);
            const taskList = [];
            for (let i=0; i<7; i++){
                for (let j=0; j<vals[i].length; j++){
                    // taskList.push(justDayNames[i]);
                    taskList.push(vals[i][j]);
                }
            }
            // console.log('tasklist', taskList);
            setWeekList(taskList);

            
        } else if (week === 'b'){
            const keys = Object.keys(tasks);
            const filteredKeys = keys.filter(key => key.includes('b') === true);
            const weekArrs = filteredKeys.map(key => tasks[key]);
            
            const justDayNames = filteredKeys.map(key => {
               key = key.substring(1);
            })
            console.log('filtered b keys', filteredKeys);
            setDayNames(filteredKeys);
            const vals = Object.values(tasks);
            const taskList = [];
            for (let i=0; i<7; i++){
                for (let j=0; j<vals[i].length; j++){
                    taskList.push(vals[i][j]);
                }
            }
            console.log('tasklist', taskList);
            setWeekList(taskList);
        }
    },[week])
    
    return (
        // <div>
        //     <h1>I am the week list for {week.toUpperCase()} week</h1>
        //     {weekList.map((day, i)=>{
        //         return(
        //         <TaskDiv>
        //             <h4>{day.time}</h4>
        //             <p>{day.activity}</p>

        //         </TaskDiv>
        //         )
        //     })}
        // </div>
        <div>
            <Title>Schedule for {week.toUpperCase()} Week</Title>
            <CardContainer>
            
            {dayNames.map(day => {
                return <Week week={week} day={day}/>
            })}
            </CardContainer>
        </div>
        
    )
}

export default WeekList
