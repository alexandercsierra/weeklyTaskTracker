import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default function Resource({resource}) {



    return (
        <ContainerDiv>
            <a href={resource.url}>
                <DayDiv>
                    <Title>{resource.name}</Title>
                    <TaskDiv>
                        <ActDiv>
                            <Para>{resource.description}</Para>
                            <img src={resource.image_url}/>
                            <Para>{resource.category}</Para>
                        </ActDiv>
                    </TaskDiv>
                </DayDiv>
            </a>
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

const Button = styled.button`
    margin-top: 2%;
    width: 50%;
    padding: 4% 0;
    // border: none;
    cursor: pointer;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);

`;