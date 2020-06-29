import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Resource from './Resource'

export default function Resources() {

    const [resource, setResource] = useState({
        name: '',
        url: '',
        category:'',
        image_url: ''
    })

    const [resources, setResources] = useState([])

    // const handleChange = e => {
    //     setResource({
    //         ...resource,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const onSubmit = e => {
    //     e.preventDefault();
    //     axios.post('https://localhost:7000', resource)
    //         .then(res=>console.log(res))
    //         .catch(err=>console.log(err))
    //     setResource({
    //         name: '',
    //         url: '',
    //         category:'',
    //         image_url: ''
    //     })
    // }

    // useEffect(()=>{
    //     axios.get('http://localhost:7000/api/resources')
    //         .then(res=>setResources(res.data))
    //         .catch(err=>console.log(err))
    // },[])

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
            {/* <form onSubmit={onSubmit}>
                <input name='name' placeholder='name' value={resource.name} onChange={handleChange}/>
                <input name='url' placeholder='url' value={resource.url} onChange={handleChange}/>
                <input name='category' placeholder='category' value={resource.category} onChange={handleChange}/>
                <input name='image_url' placeholder='image_url' value={resource.image_url} onChange={handleChange}/>
                <Button>Submit</Button>
            </form>

            {resources && resources.map(resource => <Resource resource={resource}/>)} */}
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