import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import tasks from './data/tasks'
import TaskList from './components/TaskList'
import moment from 'moment'

function App() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentDay, setCurrentDay] = useState("")


  useEffect(()=>{
    const dateArray = moment().format('MMMM D').split(" ");
    setCurrentDate(dateArray)
    console.log(currentDate);
    setCurrentDay(moment().format('dddd'))
  }, [currentDay])


  return (
    <div className="App">

      <h1>Hi</h1>
      <TaskList tasks={tasks} currentDay={currentDay} currentDate={currentDate}/>
      
    </div>
  );
}

export default App;
