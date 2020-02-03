import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import tasks from './data/tasks'
import TaskList from './components/TaskList'
import moment from 'moment'
import {Nav} from './components/Nav'
import {Route, withRouter} from 'react-router-dom'
import WeekList from './components/WeekList'
import Resources from './components/Resources'

function App() {
  //current full date
  const [currentDate, setCurrentDate] = useState('');

  const [currentDay, setCurrentDay] = useState('')

  const [reload, setReload] = useState(false);


  useEffect(()=>{
    //set current date to state
    // let time = moment().format('LT');
    // console.log(time);
    // if (time === '1:32 AM'){
    //   console.log("cleared");
    // }
    const dateArray = moment().format('MMMM D').split(" ");
    setCurrentDate(dateArray)
    setCurrentDay(moment().format('dddd'))
    

  }, [currentDay, reload])


  return (
    <div className="App">

      {/* <h1>Lambda Web PT Schedule</h1> */}
      <Nav setReload={setReload}/>
      <Route exact path="/"><TaskList tasks={tasks} currentDay={currentDay} currentDate={currentDate}/></Route>
      <Route path='/aweek'><WeekList week={"a"}/></Route>
      <Route path='/bweek'><WeekList week={"b"}/></Route>
      <Route path='/resources'><Resources/></Route>
      
      
    </div>
  );
}

const WithRouterApp = withRouter(App);

export default WithRouterApp;