import React from 'react'
import tasks from '../data/tasks'
import styled from 'styled-components'

const TaskDiv = styled.div`
    margin: 0 auto;
    padding: 2%;
`;

const ContainerDiv = styled.div`
    border: 1px solid green;
    width: 25%;
    margin: 4%;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    background: rgba(0,0,0,.5);
    color: white;
`;

const DayDiv=styled.div``;

const Title = styled.h4`
    color: white;
    text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
`;

const Week = (props) => {
    const {week, day} = props;
    console.log()
    return (
        <ContainerDiv>
            {week==="a" && 
            <DayDiv>
                <Title>{day.substring(1)}</Title>
                <TaskDiv>
                    {tasks[day].map(task => {
                        return (
                            <div>
                                <p>{task.time}</p>
                                <p>{task.activity}</p>
                            </div>
                            
                        )
                    })}
                </TaskDiv>
            </DayDiv>}
            {week==="b" && 
            <DayDiv>
                <h4>{day.substring(1)}</h4>
                <TaskDiv>
                    {tasks[day].map(task => {
                        return (
                            <div>
                                <p>{task.time}</p>
                                <p>{task.activity}</p>
                            </div>
                            
                        )
                    })}
                </TaskDiv>
            </DayDiv>}
        </ContainerDiv>
    )
}

export default Week;
