import React, {useState, useEffect} from 'react'
import Task from './Task'
import weekDates from '../data/weekDates'
import styled from 'styled-components'
import axios from 'axios'

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

const QCard = styled.div`
    width: 10%;
    padding: 2%;
    margin: 1%;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;

    @media(max-width: 1490px){
        width: 20%;
    }
    @media(max-width: 1010px){
        width: 30%;
    }
    @media(max-width: 570px){
        width: 50%;
    }
`;

const Button = styled.div`
    background: white;
    margin: 10% auto;
    width: 60%;
    padding: 4% 0;
    // border: none;
    cursor: pointer;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);


`;

const Qdiv = styled.div`
    // border: 1px solid red;
    margin: 0 auto;
    width: 30%;
`;

const TaskList = props => {
    const [dateWeek, setDateWeek] = useState("");
    const [letterDay, setLetterDay] = useState("");
    const [capWeekName, setCapWeekName] = useState("");
    const [rather, setRather] = useState("");


    const getQuestion = () => {
        axios.get("https://www.rrrather.com/botapi")
            .then(res=>setRather(res.data))
            .catch(err=>console.log(err))

    }
    
    useEffect(()=>{


        

        const month = weekDates[props.currentDate[0]];
        if (month){
            const month = weekDates[props.currentDate[0]];
            let values = Object.values(month);
            let day = props.currentDate[1];

            let letterWeek = "";
            values[0].forEach(date => {

                if (date===Number(day)){
                    // console.log("match")
                    return letterWeek = "a"
                }

            })
            values[1].forEach(date => {

                if (date===Number(day)){
                    // console.log("match")
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

    // console.log('THIS IS DATEWEEK', dateWeek)

    

    return (
        <div>
            <Title>Today is {props.currentDay} of {capWeekName} Week</Title>
            <CardContainer>
                {dateWeek ? dateWeek.map(task => {
                    return <Task key={task.id} task={task}/>
                }): "loading"}
            </CardContainer>
            <Qdiv>
                <Button onClick={getQuestion}>Get a Question</Button>
                {rather && <QCard>
                    <h4>{rather.title}</h4>
                    <p>{rather.choicea}</p>
                    <p>OR</p>
                    <p>{rather.choiceb}</p>
                </QCard>}
            </Qdiv>
        </div>
        
    )
}

export default TaskList