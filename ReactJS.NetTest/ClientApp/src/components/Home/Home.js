import React, { useEffect, useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import './Home.css';
import { Button } from "@mui/material";

const week = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const tasksTop = [{task: 'wash dishes', time: '6:00'}, {task: 'feed a cat', time: '7:00'}, 
                  {task: 'take a shower', time: '8:00'}, {task: 'clean teeth', time: '9:00'}];

const tasksSecondary = [{task: 'go for a walk', time: '12:00'}, { task: 'go to gym', time: '15:00'}, { task: 'buy bread', time: '19:00'}];

const Home = () => {

  const [selectedWeek, setSelectedWeek] = useState(0);

  const [topTaskNum, setTopTaskNum] = useState(0);

  useEffect(() => {
    setTopTaskNum(tasksTop.length);
    console.log(topTaskNum);
  }, [topTaskNum]);

  const listWeek = week.map((sign, ind) => {
    return(
      <Button key={ind} onClick={() => weekSet(ind)} sx={{
        color: '#FFC8B5', 
        fontWeight: 'bold',
        fontSize: '5vh',
        position: 'relative',
        '&:hover': {
          color: '#FFC8B5',
        },
        '&::before': {
          content: "''",
          position: 'absolute',
          display: 'block',
          width: '80%',
          marginLeft: '10%',
          height: '2px',
          bottom: '0',
          left: '0',
          backgroundColor: (selectedWeek === ind) ? '#FFC8B5!important' : '',
          transform: 'scaleX(1)',
          transition: 'transform 0.3s ease'
        },
        '&:hover::before': {
          transform: 'scaleX(0.5)',
          transition: 'transform 0.3s ease'
        }
      }}>{sign}</Button>
    );
  });

  const topTasks = tasksTop.map((obj, ind) => {
    return(
      <div key={ind} style={{marginTop: '4vh'}}>
        <div style={{display: 'inline'}}>
          <input type="checkbox" className="checkbox-input" id={ind.toString()}/>
          <label for={ind.toString()}>
            <span className="checkbox"/>
          </label>
        </div>
        <div style={{display: 'inline-block', marginLeft: '2vh'}}>
          <p className='checkboxTask'>
            {obj.task}
          </p>
        </div>
      </div>
    );
  });

  const secondaryTasks = tasksSecondary.map((obj, ind) => {
    return(
      <div key={ind} style={{marginTop: '4vh'}}>
        <div style={{display: 'inline'}}>
          <input type="checkbox" className="checkbox-input" id={ind.toString() + '1'}/>
          <label for={ind.toString() + '1'}>
            <span className="checkbox"/>
          </label>
        </div>
        <div style={{display: 'inline-block', marginLeft: '2vh'}}>
          <p className='checkboxTask'>
            {obj.task}
          </p>
        </div>
      </div>
    );
  });

  const scheduleTasks = tasksTop.concat(tasksSecondary).map((obj, ind) => {
    return(
      <div key={ind} style={{marginTop: '5vh'}}>
        <p className="scheduleTime" style={{display: 'inline'}}>{obj.time}</p>
        <p className="scheduleTask" style={{display: 'inline', marginLeft: '10vh'}}>{obj.task}</p>
        <hr className="scheduleLine"></hr>
      </div>
    );
  });

  function weekSet(ind)
  {
    console.log(ind);
    setSelectedWeek(ind);
  }

  return (
    <div>
      <NavMenu/>
      <div className="scheduleBox">
        <div>
          <p className='headerText'>Daily timebox</p>
        </div>
        <div>
          <p className="dateLabel">Date: </p>
          <p className="dateText">01.10.2003</p>
          <div className="dateWeekPeek">
            {listWeek}
          </div>
          <div className="scheduleCalendarBox">
            {scheduleTasks}
          </div>
          <div className="dateContentElements">
            <p className="taskListTop">TOP {topTaskNum} TASKS</p>
            <div className="topTasks">
              {topTasks}
            </div>
          </div>
          <div className="dateContentElements">
            <p className="taskListTop">Secondary tasks</p>
            <div className="topTasks">
              {secondaryTasks}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
