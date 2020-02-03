import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const Task = props => {
    const {task} = props;
    
    // console.log("STORED", storedComplete);
    // const [storedComplete, setStoredComplete] = useState("");
    const [classes, setClasses] = useState('incomplete');
    const [buttonClass, setButtonClass] = useState('incompleteBtn')
    const [buttonText, setButtonText] = useState('')
    const [complete, setComplete] = useState(false);
    
    

    // useEffect(()=>{
    //     if (storedComplete){
    //         setComplete(storedComplete);
    //     }
    // }, [])



    useEffect(()=>{
        
        if (task){
            const completedValue = window.localStorage.getItem(task.id);
            const parsed = JSON.parse(completedValue);
            // setStoredComplete(parsed)
            setComplete(parsed);
        }

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
                console.log('from the completed button', complete)
                setComplete(!complete);
                window.localStorage.setItem(task.id, JSON.stringify(!complete))
                // setStoredComplete(!complete);
                
            }}>{buttonText}</Button>
        </Card>
    )
}

export default Task

const Card = styled.div`
    width: 15%;
    padding: 2%;
    margin: 1%;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
    margin-top: 2%;
    width: 50%;
    padding: 4% 0;
    // border: none;
    cursor: pointer;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);

`;