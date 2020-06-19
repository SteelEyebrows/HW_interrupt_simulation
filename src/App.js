import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InterruptRequest from './comp/interruptRequest'; 
import InterruptStage from './comp/interruptStage'; 
import {ALL_STATE_VALS} from './_allStates';


import './App.css';

let width = window.innerWidth;
let height = window.innerHeight;

const useStyles = makeStyles({
  logo:{
    position:'absolute'
  },
  description:{
    width:width*0.8,
  },
  buttonGroup:{
    width:width*0.2,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height:height*0.2
  },
  index:{
    marginRight:10,
    marginLeft:10
  }
});


function App() {
  const classes = useStyles();
  let [count, setCount] = React.useState(0);
  let [interrupt, setInterrupt] = React.useState(0);
  const states =  ALL_STATE_VALS(interrupt);

  const plusCount=()=>{
    if(count ===12) return;
    setCount(++count);
  };
  const minusCount=()=>{
    if(count ===0) return;
    setCount(--count);
  };

    return (
      <div>
        <div className={classes.logo}><img src="logo.png" alt="logo"/></div>
          <Page interrupt={interrupt} setInterrupt={setInterrupt} minusCount={minusCount} plusCount={plusCount} count={count}/>
        <div className={classes.footer}> 
            <div className={classes.description} align="center">
              <p>{states[count].disc}</p>
              <h1>{states[count].title}</h1>
            </div>
            <div className={classes.buttonGroup}>
              <div onClick={minusCount}><img width={30} height={30} src={count===0?"prev2.png":"prev1.png"} alt="prev"/></div>
              <div className={classes.index}><h1>{states[count].id}</h1></div>
              <div onClick={plusCount}><img width={30} height={30}  src={count===states.length?"next2.png":"next1.png"} alt="next"/></div>
          </div>      
        </div>
      </div>
    )
 
  }


function Page(props) {

    return(
        props.count < 6?
        <InterruptRequest setInterrupt={props.setInterrupt} plusCount={props.plusCount} count={props.count}/>:
        <InterruptStage interrupt={props.interrupt} plusCount={props.plusCount} count={props.count}/>
    )
  
}

export default App;
