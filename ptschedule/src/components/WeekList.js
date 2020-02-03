import React, {useState, useEffect} from 'react'
import tasks from '../data/tasks'
import styled from 'styled-components'
import Week from './Week'



const WeekList = (props) => {
    const {week} = props;
    const [dayNames, setDayNames] = useState([]);

    useEffect(()=>{
        //if week is a week, filter out b week tasks and set the remaining days to state dayNames
        if (week === 'a'){
            const keys = Object.keys(tasks);
            const filteredKeys = keys.filter(key => key.includes('b') === false);
            setDayNames(filteredKeys);


        //if week is b week, filter out a week tasks and set the remaining days to state dayNames   
        } else if (week === 'b'){
            const keys = Object.keys(tasks);
            const filteredKeys = keys.filter(key => key.includes('b') === true);
            setDayNames(filteredKeys);

        }
    },[week])
    
    return (

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

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`;

const Title = styled.h1`
    color: white;
    text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
    @media(max-width: 570px){
        font-size: 1.35rem;
    }
`;