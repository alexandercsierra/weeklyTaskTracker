import React from 'react'
import styled from 'styled-components'
import modules from '../data/modules'

export default function Resources() {
    // const mapped = modules.map(mods=>mods.weeks.map(week=>week.days));

    // console.log(mapped[0]);
    return (
        <ContainerDiv>
            <DayDiv>
                <Title>Coming Soon</Title>
                <TaskDiv>
                    <ActDiv>
                        <Para></Para>
                    </ActDiv>
                </TaskDiv>
            </DayDiv>
        </ContainerDiv>
    )
}


const TaskDiv = styled.div`
    margin: 0 auto;
    padding: 2%;
`;

const ContainerDiv = styled.div`
    width: 25%;
    margin: 4%;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
    background: rgba(0,0,0,.5);
    color: white;
    @media(max-width: 1250px){
        width: 70%;
    }
    @media(max-width: 750px){
        width: 90%;
    }

`;

const DayDiv=styled.div``;

const Title = styled.h4`
    font-size: 1.3rem;
    color: white;
    text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
`;

const ActDiv=styled.div`
    background: rgba(0,0,0,.5);
    padding: 5px 0;
    margin: 1% auto;
    width: 70%;

`;

const Para = styled.p`
    padding-left: 4%;
    text-align: left;
`;