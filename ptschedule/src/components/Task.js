import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 10%;
    padding: 2%;
    margin: 1%;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled.div`
    margin-top: 2%;
    width: 50%;
    padding: 4% 0;
    // border: none;
    cursor: pointer;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);

`;

const Para = styled.p``;

const Task = props => {
    const [classes, setClasses] = useState('incomplete');
    const [buttonClass, setButtonClass] = useState('incompleteBtn')
    const [buttonText, setButtonText] = useState('')
    const [complete, setComplete] = useState(false);
    const {task} = props;

    useEffect(()=>{
        if (complete){
            setButtonText('undo');
            setClasses('complete');
            setButtonClass('incompleteBtn')
        } else {
            setClasses('incomplete');
            setButtonText('complete');
            setButtonClass('completeBtn')
        }
    }, [complete])

    return (
        <Card className={classes}>
            <p>{task.time}</p>
            <p>{task.activity}</p>
            <Button className={buttonClass} onClick={(e)=>{
                e.preventDefault();
                setComplete(!complete);
            }}>{buttonText}</Button>
        </Card>
    )
}

export default Task